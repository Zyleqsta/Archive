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
