from flask import Flask, render_template, request, url_for, redirect

# this name is always going to be unique
app = Flask(__name__)
posts = {
    0: {
        'post_id': 0,
        'title': 'Hello world',
        'content': 'This is my first blog post'
    }
}


@app.route('/')
def home():
    return render_template('home.jinja2', posts=posts)


@app.route('/post/<int:post_id>')
def post(post_id):
    post = posts.get(post_id)
    if not post:  # post will be None if not found
        return render_template('404.jinja2', message=f'A post with id {post_id} was not found.')

    return render_template('post.jinja2', post=post)


@app.route('/post/form')
def form():
    return render_template('create.jinja2')


@app.route('/post/create', methods=['GET','POST'])
def create_post():
    if request.method == 'POST':
        title = request.form.get('title')
        content = request.form.get('content')
        post_id = len(posts)
        posts[post_id] = {'id': post_id, 'title': title, 'content': content}

        return redirect(url_for('post', post_id=post_id))
    return render_template('create.jinja2')
# here request is :
# 127.0.0.1:5000/post/create?title=something&content=something_else
# args : ?title=something&content=something_else
# get : we can get something from the argument


if __name__ == '__main__':
    app.run(debug=True)
