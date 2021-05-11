# EnDecode

This website is created as a part of assignment which involved designing an algorithm which shortens a string into a shorter string. It is given that input strings are alphabets only and provided in small case only. The string should get shortened to smaller string and the output can be alphanumeric with no special characters. 

> **Note:** The algorithm runs best for strings greater than 6 below than 6 the length of original string and encoded string are the same.

# The Algorithm

### 1. Encryption

1. The text to be encoded is given as a string type.
2. It's first parsed into a decimal numbe r(A) using parseInt() function with a radix equal to 36. 
3. A string (B) is created which contains all permissible values allowed in the encoded string, this acts as a table to assign values from; to the encoded string.
4. Then the output number ( A ) is passed to int_to_Cust( ) function. This function then calculates the modulus of the number ( A ) with the length of chars ( B ) available in the table, corresponding value from the table is assigned to the final string.
5. The number is then reduced by dividing it by the length ( B ) of chars in table.
6. The loop runs till input number ( A ) becomes equal to zero. 

### 2. Decryption

1. The encoded alphanumeric string ( C ) is received as an input and passed to Cust_to_Int( ) function where it will be converted back to a decimal number.  
2. The result is initialised as zero, multiplied by the length of chars (B) in the reference table and added by the index of char the specific char in the reference table. 
3. The loop runs for all the characters in the encode string and converts them into corresponding decimal value. 
4. The decimal value is then converted into a string with radix 36 using .toString(). 

# Components of the code

## Frontend 

 - The frontend is made on react where App.js uses axios to send post
   request to the backend server. The string is retrieved on form
   submission passed to the server using /encode route and the server
   returns the encoded string.
   
 - The string to decode is retrieved and sent to server using /decode route the server responds with the decoded string.

## Backend

- express — a minimal/flexible Node.js web application framework.

- body-parser — middleware for parsing incoming request bodies to JSON, available in the request object.

- cors — a package for providing middleware that can be used to enable CORS with various options.

## Libraries and Plugins used

 - body-parser = ^1.19.0 
 - concurrently = ^6.1.0 
 - cors = ^2.8.5 
 - express = ^4.17.1 
 - nodemon = ^2.0.7 
 - axios = ^0.21.1 
 - react = ^17.0.2 
 - react-dom = ^17.0.2 
 - react-scripts = ^4.0.3

# Test cases 

### Test case 1

P is a single character string. Single characters are printed as it is.

![Test 1](https://github.com/amous4822/task1-invictus/blob/master/readme-pics/1.jpeg)
### Test case 2
The algorithm output encoded but strings with same length when the original string is less than or equal to 6.

![Test 2](https://github.com/amous4822/task1-invictus/blob/master/readme-pics/2.jpeg)

### Test case 3
"randomworld" is entered as a string and the encoded string is one character shorter than the original string.

![Test 3](https://github.com/amous4822/task1-invictus/blob/master/readme-pics/3.jpeg)

### Test case 4
A string of length 1407 is passed and the encoded string has a length of 1222 characters. The encoded string on decoding produces the original string.

![Test 4](https://github.com/amous4822/task1-invictus/blob/master/readme-pics/4.jpeg)