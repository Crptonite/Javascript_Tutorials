# pip install tkinter
import tkinter as tk
import tkinter.messagebox
from tkinter.constants import SUNKEN
print("Tkinter is loaded")

window = tk.Tk()
window.title('Calculator-GeeksForGeeks')
frame = tk.Frame(master=window, bg="skyblue", padx=10)
frame.pack()
entry = tk.Entry(master=frame, relief=SUNKEN, borderwidth=3, width=30)
entry.grid(row=0, column=0, columnspan=3, ipady=2, pady=2)


def myclick(number):
    entry.insert(tk.END, number)


def equal():
    try:
        y = str(eval(entry.get()))
        entry.delete(0, tk.END)
        entry.insert(0, y)
    except:
        tkinter.messagebox.showinfo("Error", "Syntax Error")


def clear():
    entry.delete(0, tk.END)


button_1 = tk.Button(master=frame, text='1', padx=15,
                     pady=5, width=3, command=lambda: myclick(1))
button_1.grid(row=1, column=0, pady=2)
button_2 = tk.Button(master=frame, text='2', padx=15,
                     pady=5, width=3, command=lambda: myclick(2))
button_2.grid(row=1, column=1, pady=2)
button_3 = tk.Button(master=frame, text='3', padx=15,
                     pady=5, width=3, command=lambda: myclick(3))
button_3.grid(row=1, column=2, pady=2)
button_4 = tk.Button(master=frame, text='4', padx=15,
                     pady=5, width=3, command=lambda: myclick(4))
button_4.grid(row=2, column=0, pady=2)
button_5 = tk.Button(master=frame, text='5', padx=15,
                     pady=5, width=3, command=lambda: myclick(5))
button_5.grid(row=2, column=1, pady=2)
button_6 = tk.Button(master=frame, text='6', padx=15,
                     pady=5, width=3, command=lambda: myclick(6))
button_6.grid(row=2, column=2, pady=2)
button_7 = tk.Button(master=frame, text='7', padx=15,
                     pady=5, width=3, command=lambda: myclick(7))
button_7.grid(row=3, column=0, pady=2)
button_8 = tk.Button(master=frame, text='8', padx=15,
                     pady=5, width=3, command=lambda: myclick(8))
button_8.grid(row=3, column=1, pady=2)
button_9 = tk.Button(master=frame, text='9', padx=15,
                     pady=5, width=3, command=lambda: myclick(9))
button_9.grid(row=3, column=2, pady=2)
button_0 = tk.Button(master=frame, text='0', padx=15,
                     pady=5, width=3, command=lambda: myclick(0))
button_0.grid(row=4, column=1, pady=2)

button_add = tk.Button(master=frame, text="+", padx=15,
                       pady=5, width=3, command=lambda: myclick('+'))
button_add.grid(row=5, column=0, pady=2)

button_subtract = tk.Button(
    master=frame, text="-", padx=15, pady=5, width=3, command=lambda: myclick('-'))
button_subtract.grid(row=5, column=1, pady=2)

button_multiply = tk.Button(
    master=frame, text="*", padx=15, pady=5, width=3, command=lambda: myclick('*'))
button_multiply.grid(row=5, column=2, pady=2)

button_div = tk.Button(master=frame, text="/", padx=15,
                       pady=5, width=3, command=lambda: myclick('/'))
button_div.grid(row=6, column=0, pady=2)

button_clear = tk.Button(master=frame, text="clear",
                         padx=15, pady=5, width=12, command=clear)
button_clear.grid(row=6, column=1, columnspan=2, pady=2)

button_equal = tk.Button(master=frame, text="=", padx=15,
                         pady=5, width=9, command=equal)
button_equal.grid(row=7, column=0, columnspan=3, pady=2)

window.mainloop()

#OR
# import tkinter as tk
# from tkinter import messagebox
# from tkinter.constants import SUNKEN

# # Create main window
# window = tk.Tk()
# window.title('Calculator-GeeksForGeeks')
# window.geometry("300x400")  # Set window size for macOS UI

# frame = tk.Frame(master=window, bg="skyblue", padx=10)
# frame.pack()

# entry = tk.Entry(master=frame, relief=SUNKEN, borderwidth=3, width=30)
# entry.grid(row=0, column=0, columnspan=3, ipady=5, pady=5)


# # Function to handle button clicks
# def myclick(number):
#     entry.insert(tk.END, str(number))


# # Function to evaluate expressions
# def equal():
#     try:
#         y = str(eval(entry.get()))
#         entry.delete(0, tk.END)
#         entry.insert(0, y)
#     except:
#         messagebox.showerror("Error", "Invalid Input")  # Better error message


# # Function to clear the entry
# def clear():
#     entry.delete(0, tk.END)


# # Creating buttons
# buttons = [
#     ('1', 1, 0), ('2', 1, 1), ('3', 1, 2),
#     ('4', 2, 0), ('5', 2, 1), ('6', 2, 2),
#     ('7', 3, 0), ('8', 3, 1), ('9', 3, 2),
#     ('0', 4, 1), ('+', 5, 0), ('-', 5, 1),
#     ('*', 5, 2), ('/', 6, 0)
# ]

# for (text, row, col) in buttons:
#     button = tk.Button(
#         master=frame, text=text, padx=15, pady=5, width=3,
#         command=lambda t=text: myclick(t)
#     )
#     button.grid(row=row, column=col, pady=2)

# # Special buttons
# button_clear = tk.Button(master=frame, text="Clear", padx=15, pady=5, width=12, command=clear)
# button_clear.grid(row=6, column=1, columnspan=2, pady=2)

# button_equal = tk.Button(master=frame, text="=", padx=15, pady=5, width=9, command=equal)
# button_equal.grid(row=7, column=0, columnspan=3, pady=2)

# # Run the application
# window.mainloop()
