# decorators :

user = {'username': 'jose123', 'access_level': 'admin'}


def user_has_permission(func):
    def secure_func(panel):
        if user.get('access_level') == 'admin':
            return func(panel)
    return secure_func


@user_has_permission
def my_function(panel):
    return f'Password for {panel} panel is 1234'


# my_secure_function = user_has_permission(my_function)

print(my_function("movies"))
