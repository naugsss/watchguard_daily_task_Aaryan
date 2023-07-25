"""
sample `questions.txt` file:
1+1=2
2+2=4
8-4=4
task description:
- read from `questions.txt`
- for each question, print out the question and and wait for the user's answer
    for example, for the first question, print out: `1+1=`
- after the user answers all the questions, calculate her score and write it to the `result.txt` file
    the result should be in such format: `Your final score is n/m.`
    where n and m are the number of correct answers and the maximum score respectively
"""
# your code starts here:

question_list = open("25-7\CSV\quiz system\questions.txt", "r")
questions = [line.strip() for line in question_list.readlines()]
question_list.close()

score = 0

for question in questions:
    question_to_ask = question.split('=')
    user_ans = input(f'{question_to_ask[0]}=')

    if(question_to_ask[1] == user_ans):
        score+=1
       
result_file = open("25-7\CSV\quiz system/result.txt", "w") 
result_file.write(f"Your final score is {score}/{len(questions)}.")
result_file.close()
