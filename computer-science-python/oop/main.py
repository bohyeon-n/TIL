from openpyxl import *

wb = load_workbook('exam.xlsx')
wb.sheetnames
ws = wb.active
g = ws.rows
cells = next(g)
keys = []
for cell in cells:
    keys.append(cell.value)

student_data = []
for row in g:
    dic = {k :c.value for k, c in zip(keys, row)}
    student_data.append(dic)

    
