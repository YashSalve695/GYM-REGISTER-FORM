I have created a react from having following fields:-

1.Full Name.
2.Age.
3.Phone no.
4.Batch no.
5.Starting month.
6.Payment.

I have used axios, for sending data into database it 

Database Scheme.
I have created a database name gym
In that database i have created table name customer in which i have following fields:

1.CUSTOMER_ID 
2.CUSTOMER_NAME 
3.CUSTOMER_AGE 
4.JOINING_DATE 
5.BATCH
6.PAYMENT

And, other table which is connected to gym using Foreign key which will use to validate if a particular 
customer has paid the monthly payment or not.

1.CUSTOMER_REF_ID 
2.PAYMENT_AMOUNT 
3.PAYMENT_DATE 
4.BATCH 

All the information which will be put in form in the by the user will be send in the database.

ASSUMPTIONS:

1.We can also keep a streak for gym members for keep them to sustain them in the gym for longer period of time.
2.If a customer use a gym for more than 3 months we can gave them some premium to them. For that we have to keep a 
  different record for them in our database.



