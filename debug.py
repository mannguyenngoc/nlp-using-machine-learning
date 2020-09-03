s = u'Capit\xe1n\n'
sutf8 = s.encode('UTF-8')
desutf8 = sutf8.decode('UTF-8')

print(s)
print(sutf8)
print(desutf8)