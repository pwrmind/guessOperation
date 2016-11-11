#Operator math guess
###Trainable function for computing
If the operation is not known, but the available input and output data for training

###Operation (addition): 5 + 8

**call**: guessOperation([[1,1],[1,2],[2,3],[3,5]],[2,3,5,8])(5,8)

**return**: 13

###Operation (multiplication): 6 * 6

**call**: guessOperation([[1,1],[2,2],[3,3],[5,5]],[1,4,9,25])(6,6)

**return**: 36

###Mixed number operations: 5 + 2 * 4

**call**: guessOperation([[1,1],[1,2],[2,3],[3,5]],[2,3,5,8])(5,guessOperation([[1,1],[2,2],[3,3],[5,5]],[1,4,9,25])(2,4))

**return**: 13