let inputData = "";
let show = false;
class Question {
    question = "";
    trueIndex = [];
    answer = [];
    constructor(question, trueIndex, answer) {
        this.question = question;
        this.trueIndex = trueIndex;
        this.answer = answer;
    }
    getData () {
        let result = "";
        for (let i = 0; i < this.answer.length; i++) {
            let data = this.answer[i];
            let isTrue = checkContainIndex(this.trueIndex, i);
            result += `<div style='color: ${isTrue ? "red" : "white"}' >${data}</div>`;
        }
        return result;
    }
}
let questionList = [
    new Question(`What was the earlier name of java programming language ?`,[1],[`A. Exclipse`,`B. OAK`,`C. Java`,`D. Netbeans`]),
    new Question(`public class MyFirstClass {
public static void main(String[] args) {
System.out.println(args[1]);
}
}
Which of the following commands will compile and then print "hello" ?`,[1],[`A. javac MyFirstClass
java MyFirstClass hello hello`,`B. javac MyFirstClass.java
java MyFirstClass hello hello`,`C. javac MyFirstClass
java MyFirstClass hello`,`D. javac MyFirstClass.java
java MyFirstClass hello`]),
    new Question(`Which of the following are valid declarations of the standard main method (you had to select 2 options):`,[3,4],[`A. static void main(String [ ] args) {}`,`B. public static int main(String [ ] args) {}`,`C. static void main(String args) {}`,`D. final static public void main(String [ ] arguments) {}`,`E. public static void main(String [ ] args) {}`]),
    new Question(`Which of the tool is used to compile java code ?`,[1],[`A. java`,`B. javac`,`C. jar`,`D. javadoc`]),
    new Question(`Which of the following tool used to execute java code ?`,[0],[`A. java`,`B. javac`,`C. jar`,`D. javadoc`]),
    new Question(`Which of the following personality is called the father of java programming language ?`,[0],[`A. James Gosling`,`B. Guido van Rossum`,`C. Bjarne Stroustrup`,`D. None of these`]),
    new Question(`Given the following code, what will be output ?

public class Pass {
static int j = 20;
public static void main(String argv[ ]) {
int i = 10;
Pass p = new Pass();
p.amethod(i);
System.out.println(i);
System.out.println(j);
}
public void amethod(int x) {
x = x * 2;
j = j * 2;
}
}`,[2],[`A. Error: amethod parameter does not match variables`,`B. 20 and 40`,`C. 10 and 40`,`D. 10 and 20`]),
    new Question(`What are the values of x and y? x = 5; y = ++x;`,[2],[`A. x = 5, y = 6`,`B. x = 5, y = 5`,`C. x = 6, y = 6`,`D. x = 6, y = 5`]),
    new Question(`What is the output of this code fragment ?

int x = 3;
int y = 10;
System.out.println(y % x);`,[1],[`A. 0`,`B. 1`,`C. 2`,`D. 3`]),
    new Question(`After execute of the code fragment below, what are the values of the variables x, a and b ?

int x, a = 6, b = 7;
x = a ++ + b ++;`,[2],[`A. x = 15, a = 7, b = 8`,`B. x = 15, a = 6, b = 7`,`C. x = 13, a = 7, b = 8`,`D. x = 13, a = 6, b = 7`]),
    new Question(`What results from running the following code ?
public class Xor {
2. public static void main(String args[]) {
3. byte b = 10; // 00001010 binary
4. byte c = 15; // 00001111 binary
5. b = (byte) (b ^ c);
6. System.out.println("b contains " + b);
7. }
8. }`,[1],[`A. The output: b contains 10`,`B. The output: b contains 5`,`C. The output: b contains 250`,`D. The output: b contains 245`]),
    new Question(`What results from the following fragment of code?
1. int x = 1;
2. String[] names == { "Fred;", "Jim", "Sheila" };
3. names[x++] = ".";
4. for (int i = 0; i < names.length; i++) {
5. System.out.print(names[i]);
6. }`,[0],[`A. Compilation fails because of an error in line 2`,`B. Compilation fails because of an error in line 2, 5`,`C. Fred;.Sheila`,`D. An ArrayIndexOutOfBoundsException is thrown`]),
    new Question(`Consider the following code:
Consider the following code:
1. for (int i = 0; i < 2; i++) {
2. for (int j = 0; j < 3; j++) {
3. if (i == j) {
4. continue;
5. }
6. System.out.println("i = " + i + " j == " + j);
7. }
8. }`,[0],[`A. i = 0 j == 1
i = 0 j == 2
i = 1 j == 0
i = 1 j == 2`,`B. i = 0 j == 0
i = 0 j == 2
i = 1 j == 0
i = 1 j == 2`,`C. Compliation fails because of an error in line 4`,`D. An arrayIndexOutOfBoundsException is thrown`]),
    new Question(`What would be the output of this code fragment ?

int x = 0, y = 4, z = 5;
if (x > 2) {
if (y < 5) {
System.out.println("message one");
} else {
System.out.println("message two");
}
} else if (z > 5) {
System.out.println("message three");
} else {
System.out.println("message four");
}`,[3],[`A. message one`,`B. message two`,`C. message three`,`D. message four`]),
    new Question(`Given the following,
1. public class Example {
2. public static void main(String [] args) {
3. double values[] = {-2.3, -1.0, 0.25, 4};
4. int cnt = 0;
5. for (int x=0; x < values.length; x++) {
6. if (Math.round(values[x] + .5) == Math.ceil(values[x])) {
7. ++cnt;
8. }
9. }
10. System.out.println("same results " + cnt + " time(s)");
11. }
12. }`,[1],[`A. same results 0 time(s)`,`B. same results 2 time(s)`,`C. Compilation fails.`,`D. same results 4 time(s)`]),
    new Question(`What method is used to determine the type of an object ?`,[2],[`A. istype`,`B. typeOf`,`C. instanceof`,`D. instanceOf`]),
    new Question(`What results from running the following code ?

public class Short {
public static void main(String[] args) {
StringBuffer s = new StringBuffer("Hello");
if ((s.length() > 5) && s.append("there").equals("False"))
;
// do nothing
System.out.println("value is " + s);
}
}`,[0],[`A. The output: value is Hello`,`B. The output: value is Hello three`,`C. A compiler error at line 4 or 5`,`D. A NullPointerException`]),
    new Question(`What will the following code snippet print ?

int count = 0, sum = 0;
do {
if (count % 3 == 0) continue;
sum += count;
} while (count++ < 11);
System.out.println(sum);`,[1],[`A. 49`,`B. 48`,`C. 37`,`D. 36`]),
    new Question(`What will happen when you compile and run the following code?
public class Test{

public static void main(String[] args) {
boolean b1 = true, b2 = false, b3 = true;
System.out.println(b1 && b2 && !b3);
}
}`,[1],[`A. true`,`B. false`,`C. Compilation Error`]),
    new Question(`What will happen when you compile and run the following code?
public class Test{

public static void main(String[] args) {
int i = 0;
int j = 1;
if(!i && j)
System.out.println("1");
else
System.out.println("2");
}
}`,[1],[`A. 1`,`B. Compilation Error`,`C. 2`]),
    new Question(`What will happen when you complie and run the following code ?

public class Test {
public static void main(String[] args) {
int i = 10, j = 12, k = 1;
k += i++ - --j;
System.out.println(k);
}
}`,[2],[`A. -2`,`B. -1`,`C. 0`,`D. 1`]),
    new Question(`What will happen when you complie and run the following code ?

public class Test {
public static void main(String[] args) {
int i = 0;
int j = i++ + ++i;
System.out.println(j);
}
}`,[2],[`A. 1`,`B. 3`,`C. 2`,`D. 4`]),
    new Question(`What is the value of a[3] as the result of the following array declaration ?
int[ ] a = {1, 2, 3, 4};`,[3],[`A. 1`,`B. 2`,`C. 3`,`D. 4`]),
    new Question(`Which of the following statements will compile without an error ? (Choose all that apply)`,[0,3],[`A. int arr[ ];`,`B. int arr[5];`,`C. int arr[5] = {1, 2, 3, 4, 5};`,`D. int arr[ ] = {1, 2, 3, 4, 5};`]),
    new Question(`Which of the following declares an array that supports two rows and a variable number of columns ?`,[1],[`A. int arr[ ][ ] = new int[2][3];`,`B. int arr[ ][ ] = new int[2][ ];`,`C. int arr[ ][ ] = new int[ ][ ];`,`D. int arr[ ][ ] = new int[ ][3];`]),
    new Question(`Output of the following Java program ?

import java.util.Arrays;
class Test {
public static void main(String[] args) {
int arr1[] = {1, 2, 3};
int arr2[] = {1, 2, 3};
if (Arrays.equals(arr1, arr2))
System.out.println("Same");
else
System.out.println("Not same");
}
}`,[0],[`A. Same`,`B. Not same`]),
    new Question(`Consider the following program:

public class Main {
public static void main(String args[]) {
int arr[][] = new int[4][];
arr[0] = new int[1];
arr[1] = new int[2];
arr[2] = new int[3];
arr[3] = new int[4];

int i, j, k = 0;
for (i = 0; i < 4; i++) {
for (j = 0; j < i + 1; j++) {
arr[i][j] = k;
k++;
}
}
for (i = 0; i < 4; i++) {
for (j = 0; j < i + 1; j++) {
System.out.print(" " + arr[i][j]);
k++;
}
System.out.println();
}
}
}

what gets printed output ?`,[1],[`A. Complier Error`,`B. 0
1 2
3 4 5
6 7 8 9`,`C. 0
0 0
0 0 0
0 0 0 0`,`D. 9
7 8
4 5 6
0 1 2 3`]),
    new Question(`What would be the result of compiling and running the following program ?

class SomeClass {
public static void main(String args[]) {
int size = 10;
int[] arr = new int[size];
for (int i = 0 ; i < size ; ++i) System.out.print(arr[i]);
}
}`,[1],[`A. The code will fail to compile, because int[ ] array declaration if incorrect`,`B. 0000000000`,`C. The program will compile and run without error, and will print nothing`,`D. nullnullnullnullnullnullnullnullnullnull`]),
    new Question(`What would be the result of compile and running the following program ?

public class Test {
int[] ia = new int[1];
Object oA[] = new Object[1];
boolean bool;
public static void main(String args[]) {
Test test = new Test();
System.out.println(test.ia[0] + " " + test.oA[0] + " " + test.bool);
}
}`,[2],[`A. The program will fail to compile, because of uninitialized variable 'bool'`,`B. The program will throw a java.lang.NullPointerException when run`,`C. The program will print "0 null false"`,`D. The program will print "0 null true"`]),
    new Question(`What is the value of seasons.length for the following array ?

String[ ] seasons = {"winter", "spring", "summer", "fall"};`,[1],[`A. 3`,`B. 4`,`C. 0`,`D. undefined`]),
    new Question(`class Test {
public static void main(String args[]) {
int arr[2];
System.out.println(arr[0]);
System.out.println(arr[1]);
}
}

What are the results ?`,[2],[`A. 0
0`,`B. garbage value
garbage value`,`C. Compile Error`]),
    new Question(`What will the following method return if called with an argument of 7 ?

public int transformNumber(int n) {
int radix = 2;
int output = 0;
output += radix * n;
radix = output / radix;
if (output < 14) {
return output;
} else {
output = output * radix / 2;
return output;
} else {
return output / 2;
}
}`,[3],[`A. 7`,`B. 14`,`C. 49`,`D. Compilation fails`]),
    new Question(`Consider the following lines of code:
boolean greenLight = true;
boolean pedestrian = false;
boolean rightTurn = true;
boolean otherLane = false;
You can go ahead only if the following expression evaluates to 'true' :
(( (rightTurn && !pedestrian || otherLane) || ( ? && !pedestrian && greenLight ) ) == true )
What variables can you put in place of '?' so that you can go ahead?`,[0],[`A. Any variable would do.`,`B. rightTurn`,`C. otherLane`,`D. None of the variable would allow to go`]),
    new Question(`Consider the following class :

public class Test{
public static void main(String[] args){
if (args[0].equals("open"))
if (args[1].equals("someone"))
System.out.println("Hello!");
else System.out.println("Go away "+ args[1]);
}
}

Which of the following statements are true if the above program is run with the command line : java Test closed`,[1],[`A. It will throw ArrayIndexOutOfBoundsException at runtime`,`B. It will end without exceptions and will print nothing`,`C. It will print Go away`,`D. It will print Go away and then will throw ArrayIndexOutOfBoundsException`]),
    new Question(`What will the following code print when run?
public class TestClass {
public static void main(String[] args) throws Exception {
String[] sa = {"a", "b", "c"};
for(String s : sa) {
if("b".equals(s)) continue;
System.out.println(s);
if("b".equals(s)) break;
System.out.println(s + " again");
}
}
}`,[3],[`A. a
a again
b`,`B. c
c again`,`C. a
a again
b
b again`,`D. a
a again
c
c again`]),
    new Question(`Consider the code shown below :

public class TestClass {
public static int switchTest(int k) {
int j = 1;
switch(k){
case 1: j++;
case 2: j++;
case 3: j++;
case 4: j++;
case 5: j++;
default : j++;
}
return j + k;
}

public static void main(String[] args) {
System.out.println(switchTest(4));
}
}

What will it print when compiled and run ?`,[3],[`A. 5`,`B. 6`,`C. 7`,`D. 8`,`E. 9`]),
    new Question(`Which line, if any, will give a compile-time error?
void test(byte x) {
switch(x) {
case 'a': // 1
case 256: // 2
case 0: // 3
default : // 4
case 80: // 5
}
}`,[2],[`A. Line 4 as the default label must be the last label in the switch statement.`,`B. There is nothing wrong with the code.`,`C. Line 2 as 256 cannot fit into a byte.`,`D. Line 1 as 'a' is not compatible with byte.`,`E. No compile time error but a run time error at line 2.`]),
    new Question(`What will the following code print when run?
public class TestClass {
public void switchString(String input) {
switch(input) {
case "a": System.out.println("apple");
case "b": System.out.println("bat");
break;
case "B": System.out.println("big bat");
default: System.out.println("none");
}
}
public static void main(String[] args) throws Exception {
TestClass tc = new TestClass();
tc.switchString("B");
}
}`,[2],[`A. bat
big bat`,`B. big bat`,`C. big bat
none`,`D. The code will not compile.`,`E. bat`]),
    new Question(`What is the result of executing the following code when the value of i is 5:

switch (i) {
default:
case 1:
System.out.println(1);
case 0:
System.out.println(0);
case 2:
System.out.println(2);
break;
case 3:
System.out.println(3);
}`,[0],[`A. It will print 1 0 2`,`B. It will print 1 0 2 3`,`C. It will print 1 0`,`D. It will print 1`,`E. Nothing will be printed`]),
    new Question(`Consider the following code :

String[] dataList = {"x", "y", "z"};
for (String dataElement : dataList) {
int innerCounter = 0;
while (innerCounter < dataList.length) {
System.out.println(dataElement + ", " + innerCounter);
innerCounter++;
}
}

How many times will the output contain 2 ?`,[2],[`A. 1`,`B. 2`,`C. 3`,`D. 4`,`E. It will fail to compile`]),
    new Question(`Which of these for statements are valid?
1. for (int i=5; i=0; i--) { }
2. int j=5;
for(int i=0, j+=5; i<j ; i++) { j--; }
3. int i, j;
for (j=10; i<j; j--) { i += 2; }
4. int i=10;
for ( ; i>0 ; i--) { }
5. for (int i=0, j=10; i<j; i++, --j) {;}`,[2],[`A. 3, 4`,`B. 1, 2`,`C. 4, 5`,`D. 5`,`E. 1, 5`]),
    new Question(`What will the following code print when compiled and run :

public class TestClass {
public static void main(String[] args) {
int k = 2;
while(--k) {
System.out.println(k);
}
}
}`,[5],[`A. 1`,`B. 1
0`,`C. 2
1`,`D. 2
1
0`,`E. It will keeping printing numbers in an infinite loop`,`F. It will not compile`]),
    new Question(`What can you do to make the following code compile? (you had to select 2 options)
public class TestClass {
public static void main(String[] args) {
int[] values = { 10, 20, 30 };
for( / put code here / ){
}
}
}`,[0,3],[`A. int k : values`,`B. int k in values`,`C. int k; k<0; k++`,`D. ;;`,`E. ; k<values.length;k++`]),
    new Question(`What will the following program print ?

class Test {
public static void main(String args[]) {
int c = 0;
boolean flag = true;
for(int i = 0; i < 3; i++) {
while(flag) {
c++;
if(i > c || c > 5) flag = false;
}
}
System.out.println(c);
}
}`,[3],[`A. 3`,`B. 4`,`C. 5`,`D. 6`,`E. 7`]),
    new Question(`What will the following code print when compiled and run ?

int[][] ab = { { 1, 2, 3 }, { 4, 5 } };
for (int i = 0; i < ab.length; i++) {
for (int j = 0; j < ab[i].length; j++) {
System.out.print(ab[i][j] + " ");
if (ab[i][j] == 2) {
break;
}
}
continue;
}`,[3],[`A. 1 2 3 4 5`,`B. 1 2`,`C. 1 3 4 5`,`D. 1 2 4 5`,`E. 2 3 5`,`F. It will not compile`]),
    new Question(`What will be the result of attempting to compile and run the following program?
class TestClass{
public static void main(String args[]){
int i = 0;
for (i = 1; i < 5; i++) continue; //(1)
for (i = 0;; i++) break; //(2)
for (; i < 5 ? false : true;); //(3)
}
}`,[0],[`A. The code will compile without error and will terminate without problem when run.`,`B. The code will compile without error but will never terminate.`,`C. The code will fail to compile, since the for statement in line 2 is invalid.`,`D. The code will fail to compile, since the break can't be used this way.`,`E. The code will fail to compile, since the continue can't be used this way.`]),
    new Question(`What will the following program print ?

class Test {
public static void main(String[] args) {
int var = 20, i = 0;
do {
while (true) {
if (i++ > var) break;
}
} while (i < var--);
System.out.println(var);
}
}`,[0],[`A. 19`,`B. 20`,`C. 21`,`D. 22`,`E. It will enter an infinite loop`]),
    new Question(`What will the following code print when compiled and run?
public class TestClass {
public static void main(String[] args) {
int[] arr = { 1, 2, 3, 4, 5, 6 };
int counter = 0;
for (int value : arr) {
if (counter >= 5) {
break;
} else {
continue;
}
if (value > 4) {
arr[counter] = value + 1;
}
counter++;
}
System.out.println(arr[counter]);
}
}`,[0],[`A. It will not compile.`,`B. It will throw an exception at run time.`,`C. 5`,`D. 7`,`E. 6`,`F. 8`]),
    new Question(`What will the following program snippet print ?

int i = 0, j = 11;
do {
if (i > j) {break; }
j--;
} while (++i < 5);
System.out.println(i + " " + j);`,[1],[`A. 5 5`,`B. 5 6`,`C. 6 6`,`D. 6 5`,`E. 4 5`]),
    new Question(`Which of the following keywords cannot be used when declaring a class ?`,[3],[`A. public`,`B. private`,`C. protected`,`D. package`]),
    new Question(`Which keyword is used to create an instance of a class ?`,[1],[`A. create`,`B. new`,`C. declare`]),
    new Question(`Which keyword is used to inherit a class ?`,[2],[`A. inherits`,`B. implements`,`C. extends`,`D. super`]),
    new Question(`Given the following code, what is the result ?

class ParentClass {
public int doStuff(int x) {
return x * 2;
}
}
public class ChildClass extends ParentClass {
public static void main(String[] args) {
ChildClass cc = new ChildClass();
long x = cc.doStuff(7);
System.out.println("x = " + x);
}
public long doStuff(int x) {
return x * 3;
}
}`,[3],[`A. x = 14`,`B. x = 21`,`C. Compilation fails at line 2`,`D. Compilation fails at line 14`]),
    new Question(`What is the output of the following code ?

public class ChildClass {
public static void main(String[] args) {
String s = "string 1";
int i = 5;
someMethod1(i);
System.out.println(i);
someMethod2(s);
System.out.println(s);
}
public static void someMethod1(int i) {
System.out.println(++i);
}
public static void someMethod2(String s) {
s = "string 2";
System.out.println(s);
}
}`,[3],[`A. 5 5 string 2 string 1`,`B. 6 6 string 2 string 2`,`C. 5 5 string 2 string 2`,`D. 6 5 string 2 string 1`]),
    new Question(`Which of the following is not a primitive data value in java ?`,[0,3],[`A. "x"`,`B. 'x'`,`C. 10.2F`,`D. Object`,`E. false`]),
    new Question(`Given the following declarations:
int a = 5, b = 7, k = 0;
Integer m = null;
and the following statements:
k = new Integer(a) + new Integer(b); //1
k = new Integer(a) + b; //2
k = a + new Integer(b); //3
m = new Integer(a) + new Integer(b); //4
Executed independent of each other, what will be the value of k (for //1, //2, and //3) and m (for //4) after execution of each of these statements?`,[2],[`A. 12
will not compile
will not compile
12`,`B. will not compile
will not compile
will not compile
12`,`C. 12
12
12
12`,`D. will not compile
will not compile
will not compile
will not compile`,`E. 12
12
12
will not compile`]),
    new Question(`Given the following code, what is the result?
1. public class WrapTest {
2. public static void main(String [] args) {
3. int result = 0;
4. short s = 42;
5. Long x = new Long("42");
6. Long y = new Long(42);
7. Short z = new Short("42");
8. Short x2 = new Short(s);
9. Integer y2 = new Integer("42");
10. Integer z2 = new Integer(42);
11.
12. if (x == y) result = 1;
13. if (x.equals(y) ) result = result + 10;
14. if (x.equals(z) ) result = result + 100;
15. if (x.equals(x2) ) result = result + 1000;
16. if (x.equals(z2) ) result = result + 10000;
17.
18. System.out.println("result = " + result);
19. }
20. }`,[2],[`A. result = 1`,`B. result = 11`,`C. result = 10`,`D. result = 11010`]),
    new Question(`String is a wrapper class ?`,[1],[`A. true`,`B. false`]),
    new Question(`What will the following program print when compiled and run ?

class Data {
private int x = 0;
private String y = "Y";
public Data(int k) {
this.x = k;
}
public Data(String k) {
this.y = k;
}
public void showMe() {
System.out.println(x + y);
}
}
public class TestClass {
public static void main(String[] args) throws Exception {
new Data(10).showMe();
new Data("Z").showMe();
}
}`,[1],[`A. 0Z
10Y`,`B. 10Y
0Z`,`C. It will not compile`,`D. It will throw an exception at run time`]),
    new Question(`Given the following code
1. public class X
2. {
3. public static void main(String [] args) {
4. X x = new X();
5. X x2 = m1(x); / Line 5 /
6. X x4 = new X();
7. x2 = x4; / Line 7 /
8. doComplexStuff();
9. }
10. static X m1(X mx) {
11. mx = new X();
12. return mx;
13. }
14. }

After line 7 runs. how many objects are eligible for garbage collection?`,[1],[`A. 0.`,`B. 1.`,`C. 2`,`D. 3`]),
    new Question(`When is the Float object, created in line 3, eligible for garbage collection?
1. public Object m()
2. {
3. Object o = new Float(3.14F);
4. Object [] oa = new Object[l];
5. oa[0] = o;
6. o = null;
7. oa[0] = null;
8. return o;
9. }`,[0],[`A. just after line 7`,`B. just after line 5`,`C. just after line 6`,`D. just after line 8`]),
    new Question(`What allows the programmer to destroy an object x?`,[3],[`A. x.finalize()`,`B. Runtime.getRuntime().gc()`,`C. x.delete()`,`D. Only the garbage collection system can destroy an object.`]),
    new Question(`Where will be the most chance of the garbage collector being invoked?
1. class HappyGarbage01
2. {
3. public static void main(String args[])
4. {
5. HappyGarbage01 h = new HappyGarbage01();
6. h.methodA(); / Line 6 /
7. }
8. Object methodA()
9. {
10. Object obj1 = new Object();
11. Object [] obj2 = new Object[1];
12. obj2[0] = obj1;
13. obj1 = null;
14. return obj2[0];
15. }
16. }`,[1],[`A. After line 9`,`B. Garbage collector never invoked in methodA()`,`C. After line 10`,`D. After line 11`]),
    new Question(`What will be the output of the following program?
public class Example {
public static void main(String[] args) {
int a = 10, b = 5;
swap(a, b);
System.out.println("a = " + a + ", b = " + b);
}
public static void swap(int a, int b) {
int tmp = a;
a = b;
b = tmp;
}
}`,[1],[`A. a = 10, b = 10`,`B. a = 10, b = 5`,`C. a = 5, b = 10`,`D. a = 5, b = 5`]),
    new Question(`What will be the output of the following program?
public class Example {
static int a = 40;
public static void main(String args[]) {
System.out.print(a + " ");
add(a);
System.out.print(a);
}
private static void add(int a) {
a = a + 40;
}
}`,[3],[`A. 40 80`,`B. 0 40`,`C. 0 0`,`D. 40 40`,`E. Compilation Error`]),
    new Question(`What will be the output of the following program?
public class VarScope {
public static void main(String[] args) {
int x = 10;
{
int y = 20;
System.out.print(x + ", " + y);
}
{
y = 10;
x = 15;
System.out.print(" - " + x + ", " + y);
}
System.out.print(" - " + x + ", " + y);
}
}`,[1],[`A. 10, 20 - 15, 20 - 10, 20`,`B. Compilation Error`,`C. 10, 20 - 15, 20 - 15, 20`,`D. 10, 20 - 15, 10 - 15, 10`]),
    new Question(`Given:
public class Employee{
String name;
public Employee(){
}
}
Which of the following lines creates an Employee instance?`,[1],[`A. Employee e;`,`B. Employee e = new Employee();`,`C. Employee e = Employee.new();`,`D. Employee e = Employee();`]),
    new Question(`Which of the following are valid at line 1?
public class X{
//line 1: insert code here.
}
(you had to select 2 options)`,[0,3],[`A. String s;`,`B. String s = 'asdf';`,`C. String s = 'a';`,`D. String s = this.toString();`,`E. String s = asdf;`]),
    new Question(`What will the following code print when compiled and run?
public class Discounter {
static double percent; //1
int offset = 10, base = 50; //2
public static double calc(double value) {
int coupon, offset, base; //3
if(percent < 10) { //4
coupon = 15;
offset = 20;
base = 10;
}
return coupon offset base * value / 100; //5
}
public static void main(String[] args) {
System.out.println(calc(100));
}
}`,[4],[`A. Compilation error at //3`,`B. 3000`,`C. 3000.0`,`D. Compilation error at //4`,`E. Compilation error at //5`,`F. Exception at run time.`]),
    new Question(`What will the following program print?
public class TestClass {
static String str;
public static void main(String[] args) {
System.out.println(str);
}
}`,[3],[`A. It will not compile.`,`B. None of the above.`,`C. It will compile but throw an exception at runtime.`,`D. It will print 'null' (without quotes).`,`E. It will print nothing.`]),
    new Question(`What will the following code print when run?
public class TestClass {
public static Integer wiggler(Integer x) {
Integer y = x + 10;
x++;
System.out.println(x);
return y;
}
public static void main(String[] args) {
Integer dataWrapper = new Integer(5);
Integer value = wiggler(dataWrapper);
System.out.println(dataWrapper+value);
}
}`,[3],[`A. 5 and 20`,`B. It will not compile.`,`C. 6 and 515`,`D. 6 and 20`,`E. 6 and 615`]),
    new Question(`Given that TestClass is a class, how many objects and reference variables are created by the following code?
TestClass t1, t2, t3, t4;
t1 = t2 = new TestClass();
t3 = new TestClass();`,[2],[`A. 3 objects, 2 references.`,`B. 2 objects, 3 references.`,`C. 2 objects, 4 references.`,`D. None of the above.`,`E. 2 objects, 2 references.`]),
    new Question(`Consider the following code snippet:
public class Test {
void test() {
MyClass obj = new MyClass();
obj.name = "jack";
// 1 insert code here
}
}
//In MyClass.java
public class MyClass {
int value;
String name;
}
What can be inserted at // 1, which will make the object referred to by obj eligible for garbage collection?`,[0],[`A. obj = null;`,`B. Runtime.getRuntime().gc();`,`C. obj.destroy();`,`D. obj.finalize()`,`E. obj.name = null; as well as obj = null;`]),
    new Question(`class SomeClass {
String s1 = "green mile"; // 0
public void generateReport(int n) {
String local; // 1
if(n > 0) local = "good"; //2
System.out.println(s1 + " = " + local); //3
}
}
(you had to select 2 options)`,[0,1],[`A. Insert after line 2 : else local = "bad";`,`B. Move line 1 and place it after line 0.`,`C. change line 1 to : final String local = "rocky";`,`D. Insert after line 2 : if(n <= 0) local = "bad";`,`E. The program already is without any errors.`]),
    new Question(`Which of the class declaration is valid in Example.java file ?`,[1],[`A. public Class Example {}`,`B. public class Example {}`,`C. class Example {}
public class Example1 {}`,`D. public class Example {}
public class Example1 {}`]),
    new Question(`Given the following code, what if the result ?

public class Frog {
static int count = 0;

public Frog() {
count ++;
}

public static void main(String[] args) {
new Frog();
new Frog();
new Frog();

System.out.println("count=" + count);
}
}`,[2],[`A. count = 1`,`B. count = 2`,`C. count = 3`,`D. count = 4`]),
    new Question(`Which method is used to call the constructors of the superclass from the subclass ?`,[1],[`A. this(argument)`,`B. super(argument)`,`C. sub(argument)`,`D. None of the above`]),
    new Question(`Given the following,
class Dog {
Dog(String name) { }
}
If class Beagle extends Dog, and class Beagle has only one constructor, which of the following be the legal constructor for class Beagle ?`,[2],[`A. Beagle(){
}`,`B. Beagle(){
super();
}`,`C. Beagle(){
super("fido");
}`,`D. No constructor, allow the default constructor`]),
    new Question(`Which is the default access modifier for an interface method ?`,[0],[`A. public`,`B. protected`,`C. private`,`D. None of the above`]),
    new Question(`An interface contains __ methods`,[1],[`A. Non-abstract`,`B. unimplemented`,`C. Implemented`]),
    new Question(`Can an abstract class may be final ?`,[1],[`A. Yes`,`B. No`]),
    new Question(`Can you extend an interface ?`,[0],[`A. Yes`,`B. No`]),
    new Question(`What is an example of polymorphism ?`,[1,2,3],[`A. Inner class`,`B. Anonymous classes`,`C. Method overloading`,`D. Method overriding`]),
    new Question(`Can a final method be overridden?`,[1],[`A. Yes`,`B. No`]),
    new Question(`How do you achive multiple inheritance in Java ?`,[0],[`A. Interface`,`B. Class`,`C. Abstract class`,`D. Object`]),
    new Question(`Cannot an interface extend another interface in the same way that a class can extend another class?`,[1],[`A. True`,`B. False`]),
    new Question(`Does Java support Multiple inheritance?`,[1],[`A. Yes`,`B. No`]),
    new Question(`Which class does begin Java class hierarchy?`,[1],[`A. Class`,`B. Object`,`C. None of the above`]),
    new Question(`"Object" class is a superclass of all other classes ?`,[0],[`A. true`,`B. false`]),
    new Question(`You would use the ____ operator to create a single instance of a named class.`,[0],[`A. new`,`B. dot`]),
    new Question(`What will happen when you compile and run the following code ?

abstract class MineBase {
abstract void amethod();
static int i;
}
public class Mine extends MineBase {
public static void main(String argv[]) {
int[] ar = new int[5];
for (int i = 0; i < ar.length; i++) {
System.out.print(ar[i]);
}
}
}`,[1],[`A. 00000`,`B. Compile fail: Mine must be declared abstract`,`C. IndexOutOfBoudesError`,`D. Conpile fail: Mine could not be instantiiated`]),
    new Question(`Given the following,

class MySuper {
public MySuper(int i) {
System.out.println("super " + i);
}
}
public class MySub extends MySuper {
public MySub() {
super(2);
System.out.println("sub");
}
public static void main(String[] args) {
MySuper sup = new MySub();
}
}

What is the result ?`,[1],[`A. sub super 2`,`B. super 2 sub`,`C. Compilation fails at line 2`,`D. Compilation fails at line 8`]),
    new Question(`Assuming that the following classes are in the same package, which statements are true ?

class SomeClass {
void method1() {}
public void method2() {}
private void method3() {}
protected void method4() {}
}
class Demo {
public void someMethod(String[] parameters) {
SomeClass sc = new SomeClass();
sc.method1();
sc.method2();
sc.method3();
sc.method4();
}
}`,[2],[`A. sc.method1() will generate a syntax error.`,`B. sc.method2() will generate a syntax error.`,`C. sc.method3() will generate a syntax error.`,`D. sc.method4() will generate a syntax error.`]),
    new Question(`Can the constructors be overloaded like regular methods?`,[0],[`A. true`,`B. false`]),
    new Question(`Which of these statements regarding the following code are correct?
public class TestClass {
static int a;
int b;
public TestClass() {
int c;
c = a;
a++;
b += c;
}
public static void main(String args[]) { new TestClass(); }
}`,[3],[`A. The code will fail to compile, since the constructor is trying to access static members`,`B. The code will fail to compile, since the constructor is trying to use static member variable a before it has been initialized`,`C. The code will fail to compile, since the constructor is trying to use member variable b before it has been initialized`,`D. None of the above`]),
    new Question(`Given the following,
1. import java.util.*;
2. public class NewTreeSet2 extends NewTreeSet {
3. public static void main(String [] args) {
4. NewTreeSet2 t = new NewTreeSet2();
5. t.count();
6. }
7. }
8. protected class NewTreeSet {
9. void count() {
10. for (int x = 0; x < 7; x++,x++ ) {
11. System.out.print(" " + x);
12. }
13. }
14. }
What is the result?`,[2],[`A. 0 2 4`,`B. Compilation fails at line 4`,`C. Compilation fails at line 8`,`D. 0 2 4 6`]),
    new Question(`Consider the following classes, declared in separate source files :

public class Base {
public void method(int i) {
System.out.print("Value is " + i);
}
}
public class Sub extends Base{
public void method(int j) {
System.out.println("This value is " + j);
}

public void method(String s) {
System.out.println("I was passes " + s);
}

public static void main(String args[] ) {
Base b1 = new Base();
Base b2 = new Sub();
b1.method(5);
b2.method(6);
}
}

What output results when the main method of the class Sub is run ?`,[2],[`A. Value is 5
Value is 6`,`B. This value is 5
This value is 6`,`C. Value is 5
This value is 6`,`D. This value is 5
Value is 6`]),
    new Question(`Consider the following class definition:
1. public class Test extends Base {
2. public Test(int j) {
3. }
4. public Test(int j, int k) {
5. super(j, k);
6. }
7. }
Which of the following forms of constructor must exist explicitly in the definition of the Base class?`,[0,1],[`A. Base() { }`,`B. Base(int j, int k) { }`,`C. Base(int j) { }`,`D. Base(int j, int k, int l) { }`]),
    new Question(`Given the following,

class A {
public void baz() {
System.out.println("A");
}
}
public class B extends A {
public static void main(String[] args) {
A a = new B();
a.baz();
}
public void baz() {
System.out.println("B");
}
}

What is the result ?`,[1],[`A. A`,`B. B`,`C. Compilation fails`,`D. An exception is thrown at runtime`]),
    new Question(`Given the following,
class Foo {
String doStuff(int x) { return "hello"; }
}
Which method would not be legal in a subclass of Foo?`,[2],[`A. String doStuff(int x) { return "hello"; }`,`B. public String doStuff(int x) { return "Hello"; }`,`C. int doStuff(int x) { return 42; }`,`D. protected String doStuff(int x) { return "Hello"; }`]),
    new Question(`Given the following,

class Over {
int doStuff(int a, float b) {
return 7;
}
}
class Over2 extends Over {
// insert code here
}

Which two methods, if inserted independently at line 8, will not compile ? (Choose two)`,[0,2],[`A. long doStuff(int x, float y) {return 4; }`,`B. protected int doStuff(int x, float y) {return 4; }`,`C. private int doStuff(int x, float y} {return 4; }`,`D. private int doStuff(int x, double y) {return 4; }`]),
    new Question(`Given the following,
1. public class ThreeConst {
2. public static void main(String [] args) {
3. new ThreeConst(4L);
4. }
5. public ThreeConst(int x) {
6. this();
7. System.out.print(" " + (x * 2));
8. }
9. public ThreeConst(long x) {
10. this((int) x);
11. System.out.print(" " + x);
12. }
13.
14. public ThreeConst() {
15. System.out.print("no-arg ");
16. }
17. }
What is the result?`,[3],[`A. 8 4`,`B. 4`,`C. 4 8`,`D. no-arg 8 4`]),
    new Question(`What will happen when you compile and run the following code ?

public class MyClass {
static int i;
public static void main(String argv[]) {
System.out.println(i);
}
}`,[1],[`A. null`,`B. 0`,`C. 1`]),
    new Question(`Which one statement is true about the application below?
1. class StaticStuff {
2. static int x = 10;
3.
4. static { x += 5; }
5.
6. public static void main(String args[]) {
7. System.out.println("x = " + ++x);
8. }
9.
10. static {x /= 5; }
11. }`,[3],[`A. Lines 5 and 12 will not compile`,`B. The code compiles, and execution produces the output x = 10.`,`C. Line 12 will not compile`,`D. The code compiles, and execution produces the output x = 4.`]),
    new Question(`Consider the following two classes defined in two java source files.
//in file /root/com/foo/X.java
package com.foo;
public class X {
public static int LOGICID = 10;
public void apply(int i) {
System.out.println("applied");
}
}
//in file /root/com/bar/Y.java
package com.bar;
//1 <== INSERT STATEMENT(s) HERE
public class Y{
public static void main(String[] args) {
X x = new X();
x.apply(LOGICID);
}
}`,[1,3],[`A. import static com.foo.*;`,`B. import static X;`,`C. import static com.foo.X.*;`,`D. import com.foo.*;`,`E. import com.foo.X.LOGICID;`]),
    new Question(`What will the following program print when run ?

public class Operators {
public static int operators() {
int x1 = -4;
int x2 = x1--;
int x3 = ++x2;
if (x2 > x3) {
--x3;
} else {
x1++;
}
return x1 + x2 + x3;
}
public static void main(String[] args) {
System.out.println(operators());
}
}`,[1],[`A. -9`,`B. -10`,`C. -11`,`D. -12`]),
    new Question(`What will the following code print when run without any arguments ?

public class TestClass {
public static int m1(int i) {
return ++i;
}
public static void main(String[] args) {
int k = m1(args.length);
k += 3 + ++k;
System.out.println(k);
}
}`,[2],[`A. It will throw ArrayIndexOutOfBoundsException`,`B. It will throw NullPointerException`,`C. 6`,`D. 5`,`E. 7`]),
    new Question(`What will happen when you compile and run the following code?
abstract class MineBase {
abstract void amethod();
static int i;
}
public class Mine extends MineBase {
public static void main(String argv[]) {
int[] ar = new int[5];
for (i = 0; i < ar.length; i++)
System.out.print(ar[i]);
}
}`,[0],[`A. Compile fail: Mine must be declared abstract`,`B. IndexOutOfBoundes Error`,`C. 00000`,`D. Compile fail: Mine could not be instantiiated`]),
    new Question(`An abstract method cannot be overridden.`,[1],[`A. true`,`B. false`]),
    new Question(`Which of the following class definitions is/are legal definition(s) of a class that cannot be instantiated ? (You had to select 2 options)

class Automobile {
abstract void honk(); //(1)
}
abstract class Automobile {
void honk(); //(2)
}
abstract class Automobile {
void honk(){}; //(3)
}
abstract class Automobile {
abstract void honk(){}; //(4)
}
abstract class Automobile {
abstract void honk(); //(5)
}`,[2,4],[`A. 1`,`B. 2`,`C. 3`,`D. 4`,`E. 5`]),
    new Question(`Consider the following code,

public abstract class TestClass {
public abstract void m1();
public abstract void m2();
System.out.println("hello");
}

Which of the following corrections can be applied to the above code (independently) so that it compiles without any error ? (You had to select 2 options)`,[0,2],[`A. Replace the method body of m2() with a : (semi-colon)`,`B. Replace the : at the end of m1() with a method body`,`C. Remove abstract from m2()`,`D. Remove abstract from the class declaration`]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),
    new Question(``,[],[``,``,``,``]),


]
let checkContainIndex = (array, element) => {
    for (let checkElelement of array) {
        if (element == checkElelement) {
            return true;
        }
    }
    return false;
}
let checkContainQuestion = () => {
    for (let questionCheck of questionList){
        if (questionCheck.question.includes(inputData)) {
            return questionCheck;
        }
    }
}

let selectFunction = () => {
    inputData = window.getSelection().toString();
}
let keydown = (event) => {
    let checkKey = event.key == "a";
    if (checkKey && inputData.length > 10 && !show) {
        show = true;
        showTable();
    } else {
        show = false;
        inputData = "";
        hiddenTable();
    }
}
let setupEvent = () => {
    let table = document.getElementById("lqt-show");
    let body = document.getElementsByTagName("body")[0];
    let divs = document.getElementsByTagName("div");

    if (!table) {
        body.innerHTML += `<div id='lqt-show' style='
            width: 500px; padding: 20px 10px; position: fixed; top: 30px; right: 30px;
            background-color: rgba(0,0,0,0.9); border-radius: 20px; z-index: 9000;
            display: none;
        '></div>`
    }

    for (let ele of divs) {
        ele.addEventListener('mouseup', selectFunction);
    }
    body.addEventListener('keydown', keydown);

}
let showTable = () => {
    let element = document.getElementById("lqt-show");
    if (element) {
        element.style.display = "block";
        let dataQuestion = checkContainQuestion();
        console.log(dataQuestion)
        if (dataQuestion){
            element.innerHTML = dataQuestion.getData();
        } else {
            element.innerHTML = `not matching any question on database`
        }
    } else {
        console.log("Element with id 'lqt-show' not found");
    }
}
let hiddenTable = () => {
    let element = document.getElementById("lqt-show");
    if (element) {
        element.style.display = "none";
    } else {
        console.log("Element with id 'lqt-show' not found");
    }
}

setupEvent();