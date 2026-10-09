# IT Passport Examination - April 2025 (Questions 1–50)

### Q1. As shown in Figure 1, there is a box that generates a single output for two (2) inputs. The input in this box is either “Agree” or “Disagree,” and the output of “Agree” is generated only when both inputs are “Agree,” while in other cases the output of “Disagree” is generated. When three (3) inputs are entered into two (2) boxes as shown in Figure 2, which of the following is the correct description concerning the output?

- a) The output of “Agree” is generated at all times when one (1) or more inputs are “Agree.”
- b) The output of “Agree” is generated at all times when two (2) or more inputs are “Agree.”
- c) The output of “Disagree” is generated only when two (2) or more inputs are “Disagree.”
- d) The output of “Agree” is generated only when all three (3) inputs are “Agree.”

**Correct Answer:** d

**💡 Figure hint:** Figure 2 chains the two boxes: inputs 1 and 2 go into the first box, and its output together with input 3 goes into the second box. Each box outputs "Agree" only when both of its inputs are "Agree" (it works like AND), so the final output is "Agree" only when all three inputs are "Agree" (d).

---

### Q2. Which of the following is the binary result of the multiplication of binary 1011 and binary 101?

- a) 1111
- b) 10000
- c) 101111
- d) 110111

**Correct Answer:** d

---

### Q3. The automation of the inspections performed by a quality controller is considered. By providing as training data 10,000 product images and the results of judgments by the quality controller about whether each product is defective or not, a machine learning model is created to judge whether a product is defective or not. The results of a test judgement by a machine learning model on 100 product images are as shown in the table. When the ratio of the number of images that product is judged to be defective by the machine learning model out of the images that product is judged to be defective by the quality controller is deemed to be the recall rate, what is the recall rate in this test judgement?

|                                                       | Judgment by the machine learning model: Defective | Judgment by the machine learning model: Not defective |
| ----------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| **Judgment by the quality controller: Defective**     | 5                                                 | 5                                                     |
| **Judgment by the quality controller: Not defective** | 15                                                | 75                                                    |

- a) 0.05
- b) 0.25
- c) 0.50
- d) 0.80

**Correct Answer:** c

---

### Q4. When a six (6)-sided dice with the numbers 1 to 6 is thrown three (3) times, what is the probability of not getting any 1?

- a) 1/216
- b) 5/72
- c) 91/216
- d) 125/216

**Correct Answer:** d

---

### Q5. Which of the following is a term for a list of instructions to a computer that are written in a human-readable programming language?

- a) PIN code
- b) Source code
- c) Binary code
- d) Character code

**Correct Answer:** b

---

### Q6. The procedure `calculateElectricBill` receives electricity usage that accepts the units (non-negative value) and returns the amount of electricity bills. The pricing structure is given as: For the first 100 units, the cost is $10 per unit. Any units exceeding 100 are charged at $15 per unit. Which of the following is an appropriate piece of code to be inserted into `_______` in the program?

**[Program]**

```text
integer: calculateElectricBill(integer: units)
integer: payAmount ← 0
if (units ≤ 100)
    payAmount ← units × 10
else
    payAmount ← _______
endif
return payAmount
```

- a) `(units - 100) × 10 + 100 × 15`
- b) `(units - 100) × 15 + 100 × 10`
- c) `units × 15`
- d) `units × 15 + 100 × 10`

**Correct Answer:** b

---

### Q7. A program uses loops to display results based on whether the cycle numbers are odd or even. The execution result of the program is shown below.

```text
0+0+0+0
+++++++
2+2+2+2
+++++++
4+4+4+4
+++++++
6+6+6+6
```

Which of the following is an appropriate combination of pieces of code to be inserted into `___A___` through `___C___` in the program?

**[Program]**

```text
integer: i, j
for (increase i from 0 to 6 by 1)
    for (increase j from 0 to 6 by 1)
        if (____A____)
            output ____B____
        else
            output ____C____
        endif
    endfor
    output a new line
endfor
```

|     | A                                 | B     | C     |
| --- | --------------------------------- | ----- | ----- |
| a)  | `(i mod 2 ≠ 0) and (j mod 2 ≠ 0)` | `"+"` | `i`   |
| b)  | `(i mod 2 ≠ 0) and (j mod 2 ≠ 0)` | `i`   | `"+"` |
| c)  | `(i mod 2 = 0) and (j mod 2 = 0)` | `"+"` | `i`   |
| d)  | `(i mod 2 = 0) and (j mod 2 = 0)` | `i`   | `"+"` |

**Correct Answer:** d

---

### Q8. In the data structure called a queue that is suitable for performing first-in first-out (FIFO) processing, values are stored in the order of “8”, “1”, “6”, and “3”, and then two (2) values are removed consecutively. Which of the following is the last value that is removed?

- a) 1
- b) 3
- c) 6
- d) 8

**Correct Answer:** a

---

### Q9. As shown in Figure 1, there is a box that generates two (2) numerical values B1 and B2 when two (2) positive integers A1 and A2 are entered. B1 has the same value as A2, and B2 is the remainder of A1 divided by A2. In Figure 2, when two (2) boxes are connected, and 49 is entered as A1 and 11 is entered as A2 in the left box, what is the value of B2 generated from the right box?

- a) 1
- b) 2
- c) 4
- d) 5

**Correct Answer:** a

---

### Q10. Which of the following is an appropriate combination of words that are inserted into A and B in the description below concerning the execution sequence of instructions in a computer?

In a computer, the instructions are executed in the sequence shown below.
(1) Refer to the program counter.
(2) `___A___` the instruction.
(3) Set the program counter to the main memory address of the next instruction.
(4) `___B___` the instruction.
(5) Execute processing according to the instruction.
(6) Return to (1).

|     | A      | B      |
| --- | ------ | ------ |
| a)  | Decode | Read   |
| b)  | Read   | Decode |
| c)  | Read   | Write  |
| d)  | Write  | Decode |

**Correct Answer:** b

---

### Q11. Which of the following is an appropriate description concerning the primary and secondary cache memory that a CPU is equipped with?

- a) The primary cache memory has larger capacity than the secondary cache memory.
- b) The secondary cache memory is slower than the main memory in writing and reading.
- c) When the CPU reads data, it first accesses the primary cache memory, and then it accesses the secondary cache memory if the data is not available.
- d) All of the data that is required for a process needs to be present on the primary or secondary cache memory when a program starts.

**Correct Answer:** c

---

### Q12. Which of the following is a type of device that is also used as a memory device in IoT devices, and has a lower power consumption and higher impact resistance than an HDD as it has memory media that is made of semiconductors and does not have any moving components?

- a) DRM
- b) DVD
- c) HDMI
- d) SSD

**Correct Answer:** d

---

### Q13. Which of the following is the appropriate description concerning the performance of a CPU?

- a) Between a 32-bit CPU and a 64-bit CPU, the length of data that a 64-bit CPU can process at once can be greater.
- b) The smaller the amount of cache memory in a CPU, the higher the processing speed of the CPU.
- c) In CPUs with the same structure, when the clock frequency is decreased, the processing speed increases.
- d) Between a dual core CPU and a quad core CPU, a dual core CPU can execute a greater number of processes simultaneously.

**Correct Answer:** a

---

### Q14. Which of the following is an appropriate characteristic of a dual system?

- a) It provides two (2) sets of systems that perform the same processing and checks the correctness of the processing by comparing the results. If one of the systems fails, it isolates the failed system and continues the processing.
- b) The same two (2) devices are used, so that the processing capability can be increased to double that of a simplex system.
- c) It provides a currently used system for performing online processing and also a backup system that is made on standby while performing batch processing. In the event of a failure in the currently used system, it switches to the backup system, starts the online processing on it, and continues the service.
- d) It connects multiple devices in series and configures them in such a way that the load of each function is distributed among them, so that processing capability is high. But if any one of the devices fails, it becomes unable to provide the service.

**Correct Answer:** a

---

### Q15. Among the changes A through D in a client/server system, which of the following is the list that contains all and only the appropriate changes for reducing the response time?

- **A:** Establishing a high-speed line between the client and the server, and reducing the time taken to transmit data.
- **B:** Increasing the number of clients, and reducing the waiting time for users before using clients.
- **C:** Reducing the time taken for data entry by users on the client’s input screen.
- **D:** Making the server high-performance, and reducing the server’s processing time.

- a) A, B, C
- b) A, D
- c) B, C
- d) C, D

**Correct Answer:** b

---

### Q16. There is a web system that is composed of two (2) web servers and one (1) database server as shown in the figure. When the availability of each Web server is 0.8 and the availability of the Database server is 0.9, which of the following is the availability of this system rounded off to two (2) decimal places? Here, if at least one (1) of the two (2) Web servers are operating and the Database server is operating, it is considered that the system is operating. Also, a fault occurs randomly on each server.

- a) 0.04
- b) 0.58
- c) 0.86
- d) 0.96

**Correct Answer:** c

---

### Q17. Which of the following is an appropriate explanation of multitasking?

- a) Several computers connected via a network work together to achieve a high-performance system.
- b) Several processor cores composed of arithmetic circuits and other control circuits are implemented in a single CPU.
- c) The CPU processing time is allocated to several processes in turn so that the processes can be executed concurrently.
- d) The same processing is performed for multiple data items by executing a single instruction.

**Correct Answer:** c

---

### Q18. The types of programs that are running when a PC is started are broadly classified into three (3) categories, namely BIOS (Basic Input Output System), OS, and resident application programs. Which of the following is the order of execution of the programs?

- a) BIOS, OS, resident application programs
- b) OS, BIOS, resident application programs
- c) OS, resident application programs, BIOS
- d) Resident application programs, BIOS, OS

**Correct Answer:** a

---

### Q19. Multiple files stored on a hard disk are used in work, from Monday to Friday. In order to handle failure of the hard disk, the data is backed up to another hard disk after the end of each day’s work. When the backup has following conditions, what is the total time required (in minutes) to perform backups of data from Monday to Friday?

**[Conditions for backups]**

1. There are 6,000 files used in work, each with a size of 3 Mbytes.
2. In each day’s work, 1,000 files are modified. Modifications do not change the size of the files.
3. Files are copied to the other hard disk at a speed of 10 Mbytes/second. One (1) file is backed up at a time; backup continues without interruption.
4. From Monday to Thursday, only files modified that day are backed up. On Friday, all files are backed up, whether or not they have been modified.

- a) 25
- b) 35
- c) 50
- d) 150

**Correct Answer:** c

---

### Q20. Spreadsheet software is to be used to perform a calculation with the monthly sales data for each product shown in the worksheet below. When the expression `COUNTIF(B2:D2, ">15000")` is entered in cell E2 and then copied to cell E3 and cell E4, which of the following is the value that is displayed in cell E4?

|       | A            | B             | C              | D           | E                 |
| ----- | ------------ | ------------- | -------------- | ----------- | ----------------- |
| **1** | Product name | January sales | February sales | March sales | Conditional count |
| **2** | Product A    | 10,000        | 15,000         | 20,000      |                   |
| **3** | Product B    | 5,000         | 10,000         | 5,000       |                   |
| **4** | Product C    | 10,000        | 20,000         | 30,000      |                   |

- a) 0
- b) 1
- c) 2
- d) 3

**Correct Answer:** c

---

### Q21. Which of the following is an Open Source Software (OSS) OS that is used in mobile devices such as smartphones and tablets?

- a) Android
- b) iOS
- c) Safari
- d) Windows

**Correct Answer:** a

---

### Q22. In document creation software, spreadsheet software, and other such software, which of the following is a function that predefines and executes a series of operation procedures?

- a) Autocomplete
- b) Source code
- c) Plug and play
- d) Macro

**Correct Answer:** d

---

### Q23. Which of the following is a space-saving server where computer components including the CPU, main memory, and storage are installed on a single circuit board and multiple circuit boards are mounted in racks?

- a) DNS server
- b) FTP server
- c) Web server
- d) Blade server

**Correct Answer:** d

---

### Q24. Which of the following is a technology that projects things such as video made with computer graphics on to buildings, objects, and other such three-dimensional things, and produces a variety of visual effects?

- a) Digital signage
- b) Virtual reality
- c) Projection mapping
- d) Polygon

**Correct Answer:** c

---

### Q25. Which of the following is a data format that can be used to compress both video and audio data?

- a) BMP
- b) GIF
- c) JPEG
- d) MPEG

**Correct Answer:** d

---

### Q26. By joining tables “Employees in charge”, “Regions”, and “Customers” that are managed in a relational database, the table A that is shown below is obtained. Which of the following is the table “Customers” that is used for the joining? Here, a solid underline indicates a primary key and a dotted underline indicates a foreign key.

**Table A (Joined Result):** Customer code, Customer name, Employee name, Region name, Representative name

- a) Customer code, Customer name, Representative name
- b) Customer code, Customer name, Representative name, Employee code
- c) Customer code, Customer name, Representative name, Region code
- d) Customer code, Customer name, Representative name, Employee code, Region code

**Correct Answer:** d

---

### Q27. Which of the following is an appropriate purpose of conducting data normalization when a relational database is constructed?

- a) Providing redundancy to data in order to detect data errors
- b) Eliminating data inconsistencies and duplications in order to make it easy to maintain and manage the data
- c) Unifying the character code of data in order to improve data reliability and storage efficiency
- d) Losslessly compressing data in order to improve access efficiency

**Correct Answer:** b

---

### Q28. An “Employee” table and a “Department” table that are to be managed with a relational database were created on the basis of the conditions (i) through (v). Which of the following is the most appropriate primary key for the “Employee” table?

**[Conditions]**
(i) Each employee has one (1) employee number that is not duplicated.
(ii) There can be employees with the same first name and family name.
(iii) Each department has one (1) department code that is not duplicated.
(iv) Each department has multiple employees.
(v) Each employee belongs to only one (1) department.

- a) “EmployeeNumber”
- b) “EmployeeNumber” and “DepartmentCode”
- c) “EmployeeName”
- d) “DepartmentCode”

**Correct Answer:** a

---

### Q29. Which of the following is the appropriate description concerning transaction processing?

- a) Commit is the reversion of a database to the status prior to the start of the transaction when a transaction is not processed successfully.
- b) Exclusive control is the confirmation of the content of a database when a transaction is processed successfully.
- c) Rollback ensures that there are no inconsistencies in data when multiple transactions attempt to update data simultaneously.
- d) Log is a file that records transaction history of a database.

**Correct Answer:** d

---

### Q30. Three (3) PCs and an Internet-capable TV (television) set are to be connected to the Internet by using a hub and a router that has a firewall function. Which of the following is an appropriate connection that enables the firewall function of the router to be used for all the traffic between the devices and the Internet? Here, “FW” in each figure indicates the firewall function.

- a) _(Figure omitted: Router with FW placed between the internal hub and the Internet)_
- b) _(Figure omitted)_
- c) _(Figure omitted)_
- d) _(Figure omitted)_

**Correct Answer:** a

**💡 Figure hint:** Figure A is the correct connection: the three PCs and the TV all connect to the hub, and the hub reaches the Internet only through the router with the FW function, so every packet between a device and the Internet passes through the firewall. In the other figures, some device or link reaches the Internet without going through the router, so its traffic bypasses the firewall.

---

### Q31. Which of the following is the appropriate role of a DNS in a network?

- a) In response to a request from a client for the allocation of an IP address, it allocates an unused IP address from a pool of IP addresses.
- b) It receives requests for file transfers from clients and transfers files to clients, and stores files that it receives from clients.
- c) It links domain names to IP addresses.
- d) It receives a request for retrieval from an e-mail recipient and transfers e-mail received by a mail server.

**Correct Answer:** c

---

### Q32. Which of the following is an appropriate example of an IPv4 IP address that is assigned to a PC?

- a) 00.00.11.aa.bb.cc
- b) 050-1234-5678
- c) 10.123.45.67
- d) http://www.example.co.jp/

**Correct Answer:** c

---

### Q33. Mr. A sent an e-mail to the three (3) people Mr. P, Mr. Q, and Mr. R. He entered Mr. P’s e-mail address in the To field, Mr. Q’s e-mail address in the CC field, and Mr. R’s e-mail address in the BCC field. Which of the following is the appropriate description concerning the three (3) recipients of the e-mail?

- a) Mr. P and Mr. Q can see that the same e-mail was also sent to Mr. R.
- b) Mr. P cannot see that the same e-mail was also sent to Mr. Q.
- c) Mr. Q can see that the same e-mail was also sent to Mr. P.
- d) Mr. R cannot see that the same e-mail was also sent to Mr. P and Mr. Q.

**Correct Answer:** c

---

### Q34. Which of the following is a technology that is used to make voice calls over the Internet by two (2) parties using the same application on their smartphones or other devices?

- a) MVNO
- b) NFC
- c) NTP
- d) VoIP

**Correct Answer:** d

---

### Q35. Among descriptions A through D concerning how to conduct information security education to employees, which of the following contains all and only the appropriate descriptions?

- **A:** The re-education of one who has committed an information security breach includes preventive actions to avoid the same fault being repeated.
- **B:** One way to conduct it is to incorporate it in a training program for new employees.
- **C:** It is restricted to employees in the information systems department.
- **D:** It is conducted after an incident or an accident concerning information security as well as on a regular basis.

- a) A, B, D
- b) A, C, D
- c) A, D
- d) B, C

**Correct Answer:** a

---

### Q36. Among the descriptions A through D of how to handle a contact list that includes customer names, addresses, and other information, which of the following contains all and only the appropriate descriptions in terms of personal information protection?

- **A:** Even if a customer asks to check his/her own registration information, this cannot be disclosed on the grounds of information protection.
- **B:** A list of all names and addresses is extracted from the contact list and is sent to all the customers to have them check for errors.
- **C:** A CD-ROM that includes contact list data is to be shredded before it is discarded.
- **D:** Contact list data is to be encrypted when it is stored in a file.

- a) A, C, D
- b) A, D
- c) B, C
- d) C, D

**Correct Answer:** d

---

### Q37. Among the threats and vulnerabilities in information security, which of the following is a vulnerability?

- a) Computer virus
- b) Social engineering
- c) Tapping of communications data
- d) Inappropriate password management

**Correct Answer:** d

---

### Q38. Which of the following is an appropriate disposal method for media that stores confidential information to ensure that information leakage does not occur?

- a) CDs and DVDs are destroyed and then are disposed of.
- b) A PC is disposed of with its CPU being destroyed.
- c) USB memory is disposed of with its files and folders being deleted.
- d) Paper documentation is not reused as memo paper and is sealed in a confidential envelope and then is disposed of together with general trash.

**Correct Answer:** a

---

### Q39. Which of the following is a term for software that encrypts files on a computer in order to make them unusable, and demands money or other valuables in exchange for the decryption key?

- a) Keylogger
- b) Ransomware
- c) Rootkit
- d) Worm

**Correct Answer:** b

---

### Q40. Which of the following is an appropriate example of biometric authentication?

- a) Authentication with a fingerprint
- b) Authentication with a digital certificate
- c) Authentication with a personal ID card
- d) Authentication with a one-time password

**Correct Answer:** a

---

### Q41. During the use of a PC in workplace, a message was displayed stating that antivirus software had detected a virus. Which of the following is an appropriate action that should be taken immediately?

- a) Reboot of the PC
- b) Notification to the workplace by e-mail from the PC
- c) Disconnection of the PC from networks
- d) Backup of files on the PC

**Correct Answer:** c

---

### Q42. There is an IoT system that is composed of IoT devices and an IoT server that manages them. Which of the following is the appropriate combination of information security incidents (i) through (iii) in this system, and confidentiality, integrity, and availability that are compromised because of the incidents?

**[Incident]**

- (i) An IoT device stopped working because its battery ran out.
- (ii) Communication between the IoT devices and the IoT server was not encrypted, so an information leakage occurred.
- (iii) Incorrect data was recorded because of a system fault.

|     | (i)             | (ii)            | (iii)           |
| --- | --------------- | --------------- | --------------- |
| a)  | Availability    | Integrity       | Confidentiality |
| b)  | Availability    | Confidentiality | Integrity       |
| c)  | Integrity       | Availability    | Confidentiality |
| d)  | Confidentiality | Availability    | Integrity       |

**Correct Answer:** b

---

### Q43. In the activities of an organization that runs an ISMS on the basis of the PDCA cycle, improvements and corrective measures are decided from the results of monitoring of the risk management activities and other such information. In which process of the PDCA cycle is this activity performed?

- a) P (Plan)
- b) D (Do)
- c) C (Check)
- d) A (Act)

**Correct Answer:** d

---

### Q44. When risk treatment in risk management for information security is divided into the four (4) categories of risk avoidance, risk sharing, risk mitigation, and risk retention, which of the following is the appropriate explanation of risk sharing?

- a) Halting activities that involve risk and fundamentally eliminating risk factors, for example, by not handling personal information.
- b) Implementing measures to reduce the probability of risk occurrence and reduce damage, such as distributing a data center over multiple locations that are geographically far away from each other in preparation for a disaster.
- c) Reducing damage that may occur when a risk materializes by transferring or distributing risk to a separate organization on the basis of an agreement, such as the purchasing of an insurance policy.
- d) If the probability of risk occurrence or the damage in the event of occurrence is considered to be small, recognizing the risk, and then accepting it without taking any particular measures.

**Correct Answer:** c

---

### Q45. Which of the following is an appropriate description concerning user authentication of a system?

- a) A mechanism that achieves login to multiple servers, applications, and other such things with a single authentication is called challenge-response authentication.
- b) A mechanism that authenticates a user by using fingerprints, voice prints, and other characteristics of a body is called single sign-on.
- c) A code number that is used in order to authenticate a user of an information system is called a PIN.
- d) A method where, instead of the order of specific numbers or characters, the positions in a grid are memorized, and during authentication, a person enters the numbers and characters in the positions that he/she remembers in a grid that is displayed on the screen is called multi-factor authentication.

**Correct Answer:** c

---

### Q46. Mr. A, a participant in system testing, has no access to the design of the internal structure of the system or software and prepares input data and output data to be used in verification of the transaction functions commonly used in the department. Which of the following is the testing technique that Mr. A is going to implement?

- a) Inspection
- b) Walk-through
- c) Black-box testing
- d) White-box testing

**Correct Answer:** c

---

### Q47. The processes of system development include system requirements definition, systems architecture design, system integration testing, and software acceptance. Which of the following is an activity that is performed in system requirements definition?

- a) The party to which development is outsourced uses the software under the same conditions as the actual production environment in order to determine if it runs correctly.
- b) A system test plan is created, and a test environment is prepared.
- c) The functions and performance required of the system are clarified.
- d) A program is created and test results are reviewed according to the evaluation criteria.

**Correct Answer:** c

---

### Q48. What is the term for revising and changing programs after system development?

- a) Computerization planning
- b) System operation
- c) Software maintenance
- d) Requirements definition

**Correct Answer:** c

---

### Q49. Which of the following is the most appropriate description concerning the usability of RPA software when the quality characteristics of software are classified into portability, functional suitability, compatibility, usability, reliability, performance efficiency, security, and maintainability?

- a) It operates even if the OS of the PC that RPA runs on changes.
- b) Automatic processing is executed at the time and on the conditions that are specified with RPA.
- c) Even if the version of the application software that is the subject of operation by RPA is upgraded, RPA will work with a simple change of the settings.
- d) People who have never used RPA can use it with only simple education.

**Correct Answer:** d

---

### Q50. Which of the following is the most appropriate case example of DevOps in software development?

- a) The developer prepares a prototype of important functions, and evaluates its adequacy by measuring the performance together with the customer.
- b) The developer moves on to the next development phase only after it is judged that the current phase is complete, and handovers the system to the operation side only after the system test where users participating in a system test confirm the operability.
- c) The developer and the operator work in close cooperation and quickly proceed with the implementation and update of functions, etc., by using automation tools and other such tools.
- d) The programs are added one by one while fixed short-period cycles are repeated in order to expand the functions in the development of a system.

**Correct Answer:** c
