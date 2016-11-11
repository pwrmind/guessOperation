#Operator math guess

call: guessOperation([[1,1],[1,2],[2,3],[3,5]],[2,3,5,8])(5,8)
return: 13

call: guessOperation([[1,1],[2,2],[3,3],[5,5]],[1,4,9,25])(6,6)
return: 36

##Mixed number operations
call: guessOperation([[1,1],[1,2],[2,3],[3,5]],[2,3,5,8])(5,guessOperation([[1,1],[2,2],[3,3],[5,5]],[1,4,9,25])(2,4))
return: 13