print("Double Quote")  # Double Quotes are used to contain strings

print('Single Quote')  # Single Quotes are used to contain strings

multi_lines = '''Tripple
Quote'''  # Tripple Quotes are used to contain strings
print(multi_lines)

Variable = "Variables"  # Variables are used to store values
print(Variable)  # Prints the variable

Story = "This text is in a variable"
print(len(Story))  # Prints the length of the variable.

print(Story[0])  # Prints the first character of the variable

print(Story[-1])  # Prints the last character of the variable

print((Story[0:5]))  # Prints the first 5 characters of the variable

print(id(Story))  # Prints the memory address of the variable

print(id(Variable))  # Prints the memory address of the variable

# Prints the first 10 characters of the variable, skipping every other character
print(Story[0:10:2])

# Prints the first 10 characters of the variable, skipping every fifth character
print(Story[0:10:5])

# Prints the string backwords.
print(Story[::-1])

# Play

meow = "moew fr"
cat = 5
kitty = 5.1

print(meow)

print(meow[0:8:2])

print("I like %s and %s" % (meow, Story))

print("The Number %i is cute" % (cat))

print("kity %f" % (kitty))

print("cute man fr fr I LOVE MUSIC ONG ONG %i for real that number go hard but not as hard as %f or %s" % (cat, kitty, meow))

print("I wonder if I can use the same thingy in a print thingy!!!!!!  lets check fr and number 1 %s and number 2 %s and number 3 %i and number 4 %i" % (meow, meow, cat, cat))
