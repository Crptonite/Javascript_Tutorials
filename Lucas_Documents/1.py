with open("scores.txt", "a") as file:
    score = input("Enter a score: ")
    file.write(score + "\n")
# scores.text is the file where the scores are stored.