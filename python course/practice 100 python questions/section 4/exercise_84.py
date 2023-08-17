# using pyglet library create a hello world application


import pyglet
  
new_window = pyglet.window.Window()
  
label = pyglet.text.Label('Hello, World !',
                          font_name ='Cooper',
                          font_size = 16,
                          x = new_window.width//2, 
                          y = new_window.height//2,
                          anchor_x ='center', 
                          anchor_y ='center')
  
@new_window.event
def on_draw():
    new_window.clear()
    label.draw()
  
pyglet.app.run()