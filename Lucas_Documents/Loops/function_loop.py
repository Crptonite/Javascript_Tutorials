# def calculate_daily_pay(hours, rate):
#     """Calculate pay for one day."""
#     return hours * rate

# def calculate_total_pay():
#     total_pay = 0
#     rate = float(input("Enter hourly rate: "))

#     for day in range(1, 4):  # 3 days: Day 1, Day 2, Day 3
#         hours = float(input(f"Enter hours worked on Day {day}: "))
#         daily_pay = calculate_daily_pay(hours, rate)
#         print(f"Pay for Day {day}: ${daily_pay:.2f}")
#         total_pay += daily_pay

#     print(f"\nTotal pay for 3 days: ${total_pay:.2f}")

# # Run the program
# calculate_total_pay()





def calculate_daily_pay(hours):
    """Calculate daily pay with overtime after 8 hours."""
    regular_hours = min(hours, 8)
    overtime_hours = max(0, hours - 8)

    regular_pay = regular_hours * 15
    overtime_pay = overtime_hours * 21

    return regular_pay + overtime_pay

def calculate_total_pay():
    total_pay = 0

    for day in range(1, 4):  # 3 days
        hours = float(input(f"Enter hours worked on Day {day}: "))
        daily_pay = calculate_daily_pay(hours)
        print(f"Pay for Day {day}: ${daily_pay:.2f}")
        total_pay += daily_pay

    print(f"\nTotal pay for 3 days: ${total_pay:.2f}")

# Run the program
calculate_total_pay()