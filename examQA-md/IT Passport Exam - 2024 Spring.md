# IT Passport Examination – April 2024 (Questions 1–50)

### Q1. Sound signals are digitized. Sampling is performed at Time 1 through Time 5 in the figure below, and four-level quantization is performed; in other words, the levels closest to the sampling point are selected. After that, two-bit encoding is performed. The result is “11 01 00 10 11”. When digitization is performed in the same way, which of the following figures represents the sound signal that results in “01 00 10 11 01”?

- a) [Figure A]
- b) [Figure B]
- c) [Figure C]
- d) [Figure D]  
  _(Note: Figures omitted in source text)_  
  **✅ Correct Answer: b**  
  **💡 Figure hint:** Decode the target code the same way as the example (00 = lowest of the four levels, 11 = highest): 01 00 10 11 01 → levels 1, 0, 2, 3, 1. Figure B is the waveform that sits near level 1 at Time 1, dips to the lowest level at Time 2, rises to level 2 at Time 3, peaks at the top level at Time 4, and falls back to level 1 at Time 5.

---

### Q2. Which of the following is the logical operation that is equivalent to the truth table below?

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

- a) AND
- b) NOT
- c) OR
- d) XOR  
  **✅ Correct Answer: a**

---

### Q3. Which of the following is a standard encoding system that is widely used for handling multilingual text and symbols around the world as a single character set?

- a) ASCII
- b) EBCDIC
- c) EUC
- d) Unicode  
  **✅ Correct Answer: d**

---

### Q4. When a chairperson and a secretary are selected from three (3) candidates with a method that allows dual roles, there are three (3) ways for the selection of a single chairperson and three (3) ways for the selection of a secretary, so in total, there are nine (9) combinations for the selection of a chairperson and a secretary. When a chairperson and a secretary are selected from five (5) candidates with a method that allows dual roles, how many combinations for the selection are there?

- a) 5
- b) 10
- c) 20
- d) 25  
  **✅ Correct Answer: d**

---

### Q5. The function `calGrade` receives the student’s score and returns the grade. The score is an integer. If the score is greater than or equal to 80, the function `calGrade` returns “A”; if the score is between 65 and 79, it returns “B”; between 50 and 64, it returns “C”; and otherwise, it returns “Fail.” Which of the following is an appropriate piece of code to be inserted in `_______` in the program?

- a) `score ≥ 65`
- b) `score ≥ 65 or score ≤ 79`
- c) `score ≤ 65 and score ≥ 79`
- d) `score ≤ 79`  
  **✅ Correct Answer: a**

---

### Q6. The procedure described below is sequentially performed for two (2) variables x and y, starting with step (1). When the procedure is completed, what is the resulting value of x?

**[Procedure]**  
(1) Assign 2 to x and 3 to y.  
(2) Subtract 1 from the value of y, and assign the resulting value to y.  
(3) Add the values of x and y, and assign the resulting value to x.  
(4) If the value of y is 1, complete the procedure. Otherwise, return to step (2).

- a) 4
- b) 5
- c) 7
- d) 8  
  **✅ Correct Answer: b**

---

### Q7. There exist four (4) states numbered 1 through 4. The four (4) states are connected as shown in the figure below, and the state transition occurs in a clockwise or counter-clockwise direction. If the current state is 1, which of the following is the state that is reached after the procedure below is performed twice?

**[Procedure]**  
The number of the current state is multiplied by 11, and the result is divided by 3. The process below is performed based on the remainder of the division.  
• When the remainder is 0, a transition to the next state occurs in the clockwise direction.  
• When the remainder is 1, a transition to the next state occurs in the counter-clockwise direction.  
• When the remainder is 2, a transition to the second state occurs in the clockwise direction.

- a) 1
- b) 2
- c) 3
- d) 4  
  **✅ Correct Answer: d**  
  **💡 Figure hint:** The figure arranges the four states in a ring: 1 → 2 → 3 → 4 → 1 in the clockwise direction. First pass: 1 × 11 = 11, and 11 ÷ 3 leaves remainder 2, so move two states clockwise to 3. Second pass: 3 × 11 = 33, remainder 0, so move one state clockwise to 4 (d).

---

### Q8. There is a device that stacks products from the bottom to the top, and removes the products sequentially from the top. There are only two (2) operations for this device.

PUSH x: Stacks one (1) product x.  
POP: Removes one (1) product from the top.  
Nothing is stacked at the start, and three (3) products arrive in the order A, B, then C. If only one (1) device is used, when the products are removed with POP operations, which of the following is an impossible order of removal?

- a) A, B, C
- b) B, A, C
- c) C, A, B
- d) C, B, A  
  **✅ Correct Answer: c**

---

### Q9. The program performs circular left shifting on the array elements. For example, after circular left shifting, the initial array `{1, 2, 3, 4, 5}` becomes `{2, 3, 4, 5, 1}`. Which of the following is an appropriate combination of pieces of code to be inserted in `___A___` and `___B___` in the program?

**[Program]**  
`integer[]: array ← {1, 2, 3, 4, 5}`  
`integer: i`  
`integer: tmp`  
`tmp ← array[1]`  
`for (increase i from 2 to the number of elements in the array by 1)`  
&nbsp;&nbsp;&nbsp;&nbsp;`array[___A___] ← array[i]`  
`endfor`  
`___B___ ← tmp`

- a) A: `i + 1`, B: `array[the number of elements of array - 1]`
- b) A: `i + 1`, B: `array[the number of elements of array]`
- c) A: `i - 1`, B: `array[the number of elements of array - 1]`
- d) A: `i - 1`, B: `array[the number of elements of array]`  
  **✅ Correct Answer: d**

---

### Q10. Which of the following is the unique value that is sequentially assigned to a memory location in order to identify the location of instructions or data stored in the main memory of a computer?

- a) Address
- b) Counter
- c) Index
- d) Pointer  
  **✅ Correct Answer: a**

---

### Q11. Which of the following is an appropriate explanation of HDMI?

- a) It is an interface for an AV device that handles the input and output of video, audio, and control signals through a single cable.
- b) It is an interface that makes use of the infrared rays used in the exchange of information between cell phones.
- c) It is a serial interface that connects an external hard disk or such other devices through a cable.
- d) It is a wireless interface that makes use of radio waves and can perform communication even when there is a slight shielding.  
  **✅ Correct Answer: a**

---

### Q12. Which of the following is an appropriate explanation of GPU?

- a) It is an index that shows the throughput of a CPU in terms of how many billions of instructions it can execute per second.
- b) It is a frequency signal that synchronizes the arithmetic processing of CPUs.
- c) It is a storage unit that is placed between a CPU and a main memory, and has a higher reading and writing speed than the main memory.
- d) It is a processing unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics.  
  **✅ Correct Answer: d**

---

### Q13. If a process from when a PC is powered on to when it becomes ready to use is divided into four (4) stages, which of the following is the stage that is performed first?

- a) Loading a BIOS
- b) Loading an OS
- c) Loading resident application software such as antivirus software
- d) Loading device drivers  
  **✅ Correct Answer: a**

---

### Q14. Which of the following is an appropriate description concerning the reliability of a system or a device?

- a) Controlling a system in a safe state in order to minimize damage when a fault occurs in a device is called foolproof.
- b) Reducing the probability of occurrence of a fault in a device by using high-quality and high-reliability parts and elements is called fail-safe.
- c) Enabling continuation of system processing when a fault occurs in a system due to an error is called fault tolerance.
- d) Taking measures in the design stage so that humans do not make mistakes in system operation, or no faults or failures occur even if they make mistakes is called fail soft.  
  **✅ Correct Answer: c**

---

### Q15. Among the costs below concerning a sales management system, which of the following is the list that contains all costs that are included in TCO?

(i) The purchase cost for products handled by the sales management system  
(ii) The shipment cost for products handled by the sales management system  
(iii) The software maintenance cost for the sales management system  
(iv) The hardware maintenance cost for the sales management system

- a) (i), (ii)
- b) (i), (iv)
- c) (ii), (iii)
- d) (iii), (iv)  
  **✅ Correct Answer: d**

---

### Q16. In a web service and other services, in order to increase reliability and process a large volume of accesses from users, which of the following is a technique that links multiple computers and makes them work as if they were a single computer?

- a) Clustering
- b) Spooling
- c) Buffering
- d) Mirroring  
  **✅ Correct Answer: a**

---

### Q17. In a file system with the hierarchy structure shown in the Figure, when `..\..\DIRB\Fn.txt` is specified from the directory marked with an \* (the current directory), which of the following is the file that is referenced?

_(Note: Directory structure diagram omitted in source text)_

- a) Fn.txt at (1)
- b) Fn.txt at (2)
- c) Fn.txt at (3)
- d) Fn.txt at (4)  
  **✅ Correct Answer: d**  
  **💡 Figure hint:** `..\..` goes up two levels from the current directory (*). From there, `DIRB\Fn.txt` is the Fn.txt directly inside the DIRB directory at that level, which the figure labels (4) (d).

---

### Q18. Which of the following is an appropriate description concerning OSS (Open Source Software)?

- a) Use in industries that require high quality, such as the medical industry, is prohibited.
- b) Various types of license exist, and the terms of license must be observed when the software is used.
- c) If the source code is released on the Internet, the software can be called OSS even if redistribution is prohibited.
- d) The software must not be sold for a fee.  
  **✅ Correct Answer: b**

---

### Q19. Which of the following is a term that means the validation of a software license by using the product ID and the user’s hardware information, in order to prevent unauthorized use of the software?

- a) Activation
- b) Cloud computing
- c) Streaming
- d) Fragmentation  
  **✅ Correct Answer: a**

---

### Q20. Sales data by month for each branch is evaluated. In the “Evaluation” field for each branch by month, if the amount of sales at the branch is below the average sales amount of branches A through C for the month, the symbol “X” is to be displayed, and if the amount is above or equal to the average, the symbol “O” is to be displayed. Which of the following is an appropriate expression to be entered in cell C3? Here, the expression that is entered in cell C3 is copied and used in cell D3, cell E3, cells C5 through E5, and cells C7 through E7.

- a) `IF($C2 < AVERAGE(C2:E2), 'O', 'X')`
- b) `IF($C2 < AVERAGE(C2:E2), 'X', 'O')`
- c) `IF(C2 < AVERAGE($C2:$E2), 'O', 'X')`
- d) `IF(C2 < AVERAGE($C2:$E2), 'X', 'O')`  
  **✅ Correct Answer: d**  
  **💡 Figure hint:** The worksheet is not in the source. Branches A, B and C are in columns C, D and E; each month's sales are in rows 2, 4 and 6, with that month's Evaluation row directly below (rows 3, 5 and 7). The formula compares the branch's own cell (`C2`, fully relative) with the average of its row with the columns locked (`AVERAGE($C2:$E2)`) and shows X when it is below average: `IF(C2 < AVERAGE($C2:$E2), 'X', 'O')` (d).

---

### Q21. Which of the following is an appropriate description about the function keys of a PC?

- a) They are the keys where specific functions are assigned for each application and OS.
- b) They display a keyboard shape on a screen and enable input processing with software.
- c) They have a security role and are keys for performing encryption and decryption.
- d) They are information to identify specific lines uniquely in a database.  
  **✅ Correct Answer: a**

---

### Q22. Which of the following is a technology that is also used in measures against tampering of software in IoT devices and verifies the digital signature of the OS, firmware, or other such software when it is started, and only executes the software if the verification is successful?

- a) GPU
- b) RAID
- c) Secure boot
- d) Reboot  
  **✅ Correct Answer: c**

---

### Q23. Which of the following is the appropriate description concerning a smart meter that is an IoT device?

- a) It is embedded in a car navigation system or a game controller, and measures the extent of change in speed.
- b) It is installed in a house or other such place and automatically measures consumption of electricity and gas, and sends the data to the supplier by using a cellular network, etc.
- c) It deletes the data that is stored on a mobile terminal such as a smartphone or mobile PC from a remote location via a network.
- d) In addition to counting the number of steps, it identifies the walking route, detects the walking speed and height variations in the route, and calculates the energy consumed.  
  **✅ Correct Answer: b**

---

### Q24. Which of the following is the appropriate reason for using a style sheet in the creation of a website?

- a) The data between the web server and the web browser can be exchanged in a safe manner.
- b) The users can be notified of update to the website.
- c) The users of the website can be identified.
- d) The appearance of multiple web pages can be easily unified.  
  **✅ Correct Answer: d**

---

### Q25. A technique that represents a figure with pixels is considered. In the case of Fig. 1, when each row of the figure of 3 right and B and W are respectively written for black and white, the result is “BWBBBBBWB” (9 characters). Then, when a succession of n characters of “B”s or “W”s is represented as “Bn” or “Wn” respectively (where n is an integer of 2 or greater), Fig. 1 can be represented as “BWB5WB” (6 characters) and the compression ratio in this case is defined as 6/9 or 66.7%. When the figure of 5 is compressed using the same technique, what is the compression ratio in percentage?

- a) 48.0
- b) 52.0
- c) 76.0
- d) 88.0  
  **✅ Correct Answer: b**  
  **💡 Figure hint:** The figure of "5" is a 5 × 5 pixel grid, so it is 25 characters before compression. Written with the same run-length rule it becomes 13 characters, so the compression ratio is 13 / 25 = 52% (b).

---

### Q26. There are “Sales”, “Customer” and “Product” tables in a relational database. Among lists A through C, which of the following contains all and only the lists that can be created from the data in these tables?

A: The list of customers who bought more than a certain amount of money during a certain period in the past  
B: The list of products that were out of stock in the previous month  
C: The ranking list for sales amount by product in the previous month

- a) A, B
- b) A, B, C
- c) A, C
- d) B, C  
  **✅ Correct Answer: c**

---

### Q27. In the description below concerning the design process of a relational database, which of the following is an appropriate combination of terms to be inserted into blanks A through C?

"Analyze the target business operations, identify the data which is used there, and create [A], consisting of entities and [B]. On the basis of the created [A], design [C]."

- a) A: instances, B: E-R diagram, C: functions
- b) A: instances, B: flowchart, C: tables
- c) A: relationships, B: E-R diagram, C: tables
- d) A: relationships, B: flowchart, C: functions  
  **✅ Correct Answer: c**

---

### Q28. Which of the following is an appropriate combination of relational database manipulations I through III and relational operations?

I: Extracting the specified field (column)  
II: Extracting the specified record (row)  
III: Combining multiple tables into one (1) table

- a) I: Join, II: Projection, III: Selection
- b) I: Projection, II: Join, III: Selection
- c) I: Projection, II: Selection, III: Join
- d) I: Selection, II: Projection, III: Join  
  **✅ Correct Answer: c**

---

### Q29. Which of the following is the appropriate explanation of commit in transaction processing?

- a) When a transaction attempts to update shared data, other transactions are blocked from updating this data.
- b) The update is confirmed in the database. It is used when a transaction is processed normally.
- c) The database is returned to the status prior to the start of a transaction. It is used when the transaction is not processed normally for some reason.
- d) Multiple tables are made into one (1) table by using the columns as keys that relate the tables to each other.  
  **✅ Correct Answer: b**

---

### Q30. When an e-mail is sent to multiple recipients, there are cases that no recipient of the e-mail should know the e-mail addresses of other recipients. In such cases, which of the following is an appropriate place where the e-mail addresses of the multiple recipients are entered?

- a) Bcc
- b) Cc
- c) To
- d) Both To and Bcc  
  **✅ Correct Answer: a**

---

### Q31. Which of the following is **not** an appropriate description of online storage?

- a) It can be used not only from a computer, but also from a smartphone or a tablet, if the device is connected to the Internet.
- b) There is a free service that can be used with limited capacity and functionalities.
- c) There is a service that allows multiple registered users to share and edit the same file.
- d) If the capacity of the auxiliary storage unit built into the user’s computer or tablet is increased, the capacity of online storage will also increase automatically.  
  **✅ Correct Answer: d**

---

### Q32. Which of the following is an example of damage incurred by the theft of cookies by a cross-site scripting attack or other attack?

- a) The PC becomes infected by a virus.
- b) The files on the PC are sent to an outside destination.
- c) Web service accounts are hijacked.
- d) Intrusion into the network takes place over the wireless LAN.  
  **✅ Correct Answer: c**

---

### Q33. When a web page with URL “http://srv01.itpec.org/abc.html” is accessed on the Internet, what does “srv01” in the URL stand for?

- a) The fact that “itpec.org” is a web service
- b) The file name of the web page where an access is requested
- c) The fact that HTTP or HTTPS can be specified as a communication protocol
- d) The host name of a computer that belongs to the domain name “itpec.org”  
  **✅ Correct Answer: d**

---

### Q34. A large number of IP addresses are required in order to connect a massive number of IoT devices to the Internet, so the decision was made to use the Internet Protocol with IP addresses that have a length of 128 bits. Which of the following is this protocol?

- a) IPv4
- b) IPv5
- c) IPv6
- d) IPv8  
  **✅ Correct Answer: c**

---

### Q35. Which of the following is a definition of a zero-day attack that is a threat to information security?

- a) It stops the target system of the attack within 24 hours from the start of the attack.
- b) It causes the onset immediately after the infection by using a virus without an incubation period.
- c) It exploits vulnerability before any countermeasure against the software vulnerability is made public.
- d) It immediately obtains confidential information from a third party through social engineering or eavesdropping.  
  **✅ Correct Answer: c**

---

### Q36. Which of the following is an appropriate action for the secure use of a smartphone?

- a) Using it without updating OS and using the same version of the OS as at the time of purchase
- b) Enhancing the functions by making alterations such as jailbreak
- c) Setting up a feature that locks the screen with a password
- d) Downloading applications that are considered to be useful from any web site  
  **✅ Correct Answer: c**

---

### Q37. Security risk treatment in ISMS includes risk transfer, risk avoidance, risk acceptance, and risk reduction. Which of the following is an example of risk avoidance?

- a) A security measure was taken, which lowered the possibility of problems arising.
- b) The company took out insurance in case a problem arises and causes damage.
- c) The risk was confirmed to be small, and it was decided that damage would be borne by the company when a problem arises.
- d) The company withdrew from the services that carried high risk.  
  **✅ Correct Answer: d**

---

### Q38. Which of the following is an appropriate description of the beginning of a URL indicating that TLS is used for communication between a web browser and a web server?

- a) http://
- b) https://
- c) shttp://
- d) ssl://  
  **✅ Correct Answer: b**

---

### Q39. Which of the following is a technique that is used to detect that the received data has been tampered with?

- a) Compression
- b) Digital signature
- c) Password authentication
- d) Filtering  
  **✅ Correct Answer: b**

---

### Q40. Among I through III below, which of the following lists all and only the appropriate measures for preventing a PC from getting infected with viruses?

I. Applying a security patch to software  
II. Striping across hard disks  
III. Educating users about security

- a) I
- b) I, II
- c) I, III
- d) II, III  
  **✅ Correct Answer: c**

---

### Q41. Which of the following is an appropriate example of phishing?

- a) An attacker’s act of sending a command via network to a virus-infected PC and having it execute an illegal program
- b) Sending an e-mail that pretends to be from a financial institution, directing a user to a false web site, and acquiring a password
- c) Identifying a password by using a dictionary data that enumerates strings that are likely to be used as a password
- d) Sending a large number of packets from multiple computers to a target server and disabling the function of the server  
  **✅ Correct Answer: b**

---

### Q42. Which of the following is an appropriate description concerning behavioral detection technology for protecting systems from unknown threats such as zero-day attacks?

- a) It detects that a PC has not been used for a certain period of time, darkens the screen automatically, and displays a changing image.
- b) It suspends use of an account when it detects that an incorrect password is entered on a web site more than a set number of times.
- c) It continually monitors the activity of programs and stops any program with any suspicious activity, such as unusual communication to an outside destination.
- d) It changes users’ input on a web site into safe character strings when it detects any harmful character string that could cause malfunction.  
  **✅ Correct Answer: c**

---

### Q43. Which of the following is appropriate as the characteristic of single sign-on?

- a) It is an effective countermeasure for information leakage because data is processed and stored on a server side, and data does not remain on devices.
- b) It implements high availability because when the data is saved, it is automatically distributed and stored on multiple disks.
- c) It implements high confidentiality because it employs authentication that uses fingerprint and iris in addition to a password.
- d) It implements high convenience because once a user is authenticated, he or she is allowed to use multiple services without any more authentication.  
  **✅ Correct Answer: d**

---

### Q44. Among the descriptions from A through C, which of the following is the list that contains all and only appropriate features of VPN?

A: Devices can communicate with each other by using a VPN wirelessly without passing through any access point.  
B: A VPN uses a public network, etc., but it can be used like a private network of one’s own company.  
C: The security status of computers can be checked by connecting them to a VPN.

- a) A
- b) A, C
- c) B
- d) C  
  **✅ Correct Answer: c**

---

### Q45. When an attacker makes an unauthorized intrusion into a computer, the attacker sometimes changes a program or settings in the computer in order to make further intrusions into the computer easier. Which of the following is the most appropriate term to express the method used by the attacker for further intrusions into the computer?

- a) Tapping
- b) Backdoor
- c) Phishing
- d) Port scan  
  **✅ Correct Answer: b**

---

### Q46. In order to achieve a non-stop system, which of the following is an appropriate item to be considered during the design of the system architecture?

- a) Partitioning of software into components
- b) Encryption of data
- c) Reduction in power consumption of hardware
- d) Dual redundancy of hardware  
  **✅ Correct Answer: d**

---

### Q47. A detailed design document of software is created as an output of software detailed design. Which of the following is the person who takes charge of the next process of development upon receipt of this output?

- a) System auditor
- b) System operator in-charge
- c) System user
- d) Programmer  
  **✅ Correct Answer: d**

---

### Q48. Mr. A, a developer, is analyzing and verifying the internal structure of a program in order to determine whether input data is processed as intended. Which of the following is the test that Mr. A is currently conducting?

- a) System test
- b) Top-down test
- c) Black box test
- d) White box test  
  **✅ Correct Answer: d**

---

### Q49. Among the descriptions A through D concerning software installation, which of the following lists all and only the appropriate descriptions?

A: In a new development, installation is performed without delay by the deadline without the creation of an implementation plan.  
B: After software installation is performed, an implementation plan and an implementation report must be created promptly and agreement obtained.  
C: When software is developed in-house by a company, the scope of impact is internal, so installation is performed after the creation of an implementation plan, and agreement on the implementation plan is obtained after implementation.  
D: When a function is to be added to software in production system, an implementation plan is created for the software with the added function, agreement is obtained, and software installation is performed.

- a) A, C
- b) B, C, D
- c) B, D
- d) D  
  **✅ Correct Answer: c**

---

### Q50. Which of the following is the most appropriate term expressing initiatives to improve the services where the development side and the operations side of the system cooperate to proactively automate operations of the system and transition to the new production system, and release new functions?

- a) DevOps
- b) RAD
- c) Object-oriented development
- d) Test-driven development  
  **✅ Correct Answer: a**
