class Database:
    content = {'users': []}

    @classmethod
    def insert(cls, data):
        cls.content['users'].append(data)
        # since this is a class method so database and cls both are same thing

    @classmethod
    def remove(cls, finder):  # lambda x : x['username'] != 'Rolf' --> finder function
        cls.content['users'] = [user for user in cls.content['users'] if not finder(user)]

    @classmethod
    def find(cls, finder):  # lambda x : x['username'] == 'Rolf' --> finder function
        return [user for user in cls.content['users'] if finder(user)]

