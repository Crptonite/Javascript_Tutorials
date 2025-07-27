for i in range( -1 ,-5 , -1 ):
    print(i)

for i in range( -1, -10, -3 ):
    print(i)


for i in range( 0, -5 ):
    print(i)
# Empty range
# No iteration 
# This means: “Start at 0, count up to -5.”
# But 0 is already greater than -5, so there's no valid number to start with or go to — Python won’t even start the loop. It’s like saying:
for i in range (5):
    print(i)