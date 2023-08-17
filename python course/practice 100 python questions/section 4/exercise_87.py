# add the missing items to the file

checklist = ["Portugal", "Germany", "Spain"]
checklist = [i + "\n" for i in checklist]

with open("section 4\countries_clean.txt") as file:
    content = file.readlines()

updated_list = sorted(checklist + content)
with open("countries_missing.txt", "w") as file:
    for i in updated_list:
        file.write(i)

    