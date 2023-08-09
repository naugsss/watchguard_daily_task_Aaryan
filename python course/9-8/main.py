import tkinter as tk
from tkinter import ttk


def greet():
    print(f"Hello {user_name.get() or 'World'}")


root = tk.Tk()
root.title("Greeter")

user_name = tk.StringVar()

# label is used to implement display boxes where we can place text or boxes
name_label = ttk.Label(root, text="Name : ")
# padx adds padding on left and right side
# pack method is used to declare the position of widgets
name_label.pack(side="left", padx=(0,10))
# entry is used for taking input from the user
name_entry = ttk.Entry(root, width=15, textvariable=user_name)
name_entry.pack(side="left")
name_entry.focus()

greet_button = ttk.Button(root, text="Greet", command=greet)
greet_button.pack(side="left", fill="x", expand=False)

root.mainloop()

