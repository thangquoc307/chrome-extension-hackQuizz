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
            result += `<div style='color: ${isTrue ? "red" : "black"}; font-weight: bolder' >${data}</div>`;
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
    new Question(`Which of the following statements can be inserted at //1 to make the code compile without errors ?

public class InitTest {
static int s1 = 10;
int i;
final boolean bool;
// 1
}`,[4],[`A. instance {bool = true; }`,`B. initTest() {si += 10; }`,`C. {si = 5; i = bool ? 1000 : 2000; }`,`D. {i = 1000; }`,`E. {bool = (si > 5); i = 1000; }`]),
    new Question(`Given the following code,
class Triangle {
public int base;
public int height;
private final double ANGLE;
public void setAngle(double a) { ANGLE = a; }
public static void main(String[] args) {
Triangle t = new Triangle();
t.setAngle(90);
}
}
Identify the correct statement(s).`,[3],[`A. An exception will be thrown at run time.`,`B. the value of ANGLE will not be set to 90 by the setAngle method.`,`C. The code will work as expected setting the value of ANGLE to 90.`,`D. The code will not compile.`]),
    new Question(`What should be the return type of the following method?
public RETURNTYPE methodX(byte by) {
double d = 10.0;
return (long) by / d*3;
}`,[0],[`A. double`,`B. int`,`C. long`,`D. float`,`E. byte`]),
    new Question(`Final variables should be declared in the beginning ?`,[0],[`A. true`,`B. false`]),
    new Question(`Which of the following way is a valid annotation definition?`,[0],[`A. public @interface MyAnnotation{}`,`B. public @annotation MyAnnotation{}`,`C. private @interface MyAnnotation{}`,`D. public @MyAnnotation{}`]),
    new Question(`Which one statement is true about the code below?
1. String s1 = "abc" + "def";
2. String s2 = new String(s1);
3. if (s1 == s2)
4. System.out.println("== succeeded");
5. if (s1.equals(s2))
6. System.out.println(".equals() succeeded");`,[3],[`A. Line 4 executes, and line 6 does not.`,`B. Lines 4 and 6 both execute.`,`C. Neither line 4 nor line 6 executes.`,`D. Line 6 executes, and line 4 does not.`]),
    new Question(`Given the following declarations:
String s1 = new String("Hello");
String s2 = new String("there");
String s3 = new String();
Which of the following are legal operations?`,[1],[`A. s3 = s1 - s2;`,`B. s3 = s1 + s2;`,`C. s3 = s1 & s2`,`D. s3 = s1 && s2`]),
    new Question(`Which two are valid declarations of a String? (Choose two.)`,[0,3],[`A. String s1 = null;`,`B. String s2 = 'null';`,`C. String s3 = (String) 'abc';`,`D. String s5 = "Using Strings rule";`]),
    new Question(`If you run the code below, what gets printed out?
String s = new String("Bicycle");
int iBegin = 1;
char iEnd = 3;
System.out.println(s.substring(iBegin, iEnd));`,[2],[`A. Bic`,`B. error: no method matching substring(int, char)`,`C. ic`,`D. icy`]),
    new Question(`Given the following code,

public class StringRef {
2. public static void main(String [] args) {
3. String s1 = "abc";
4. String s2 = "def";
5. String s3 = s2;
6. s2 = "ghi";
7. System.out.println(s1 + s2 + s3);
8. }
9. }
What is the result?`,[2],[`A. abcdefghi`,`B. abcdefdef`,`C. abcghidef`,`D. abcghighi`]),
    new Question(`Given the following code,
1. public class Theory {
2. public static void main(String[] args) {
3. String s1 = "abc";
4. String s2 = s1;
5. s1 += "d";
6. System.out.println(s1 + " " + s2 + " " + (s1 == s2));
7.
8. StringBuffer sb1 = new StringBuffer("abc");
9. StringBuffer sb2 = sb1;
10. sb1.append("d");
11. System.out.println(sb1 + " " + sb2 + " " + (sb1 == sb2));
12. }
13. }
Which are true? (Choose all that apply.)`,[2,3],[`A. The first line of output is abc abc true`,`B. The first line of output is abc abc false`,`C. The first line of output is abcd abc false`,`D. The second line of output is abcd abcd true`]),
    new Question(`Given the following code,
4. String d = "bookkeeper";
5. d.substring(1,7);
6. d = "w" + d;
7. d.append("woo");
8. System.out.println(d);
What is the result?`,[3],[`A. wookkeewoo`,`B. wbookkeeper`,`C. wbookkeewoo`,`D. Compilation fails.`]),
    new Question(`Consider the following program:
class SBAppend {
public static void main(String []args) {
Object nullObj = null;
StringBuffer strBuffer = new StringBuffer(10);
strBuffer.append("hello ");
strBuffer.append("world ");
strBuffer.append(nullObj);
strBuffer.insert(11, '!');
System.out.println(strBuffer);
}
}
Which one of the following options correctly describes the behavior of this program?`,[2],[`A. This program throws a NullPointerException.`,`B. This program prints the following: hello world!`,`C. This program prints the following: hello world! Null`,`D. This program throws an InvalidArgumentException.`]),
    new Question(`What will be the result of attempting to compile and run the following program?
public class TestClass{
public static void main(String args[ ] ){
StringBuilder sb = new StringBuilder("12345678");
sb.setLength(5);
sb.setLength(10);
System.out.println(sb.length());
}
}`,[0],[`A. It will print 10.`,`B. It will print 5.`,`C. Compilation error.`,`D. None of the above.`,`E. It will print 8.`]),
    new Question(`What will be the result of attempting to compile and run the following program?
public class TestClass {
public static void main(String args[]) {
String s = "hello";
StringBuilder sb = new StringBuilder("hello");
sb.reverse();
s.reverse();
if(s == sb.toString()) System.out.println("Equal");
else System.out.println("Not Equal");
}
}`,[0],[`A. Compilation error.`,`B. It will print 'Equal'.`,`C. It will print 'Not Equal'.`,`D. Runtime error.`,`E. None of the above.`]),
    new Question(`Can null value be added to a List ?`,[0],[`A. Yes`,`B. No`]),
    new Question(`What is the result ?

import java.util.*;
public class Primes {
public static void main(String[] args) {
List p = new ArrayList();
p.add(7);
p.add(2);
p.add(5);
p.add(2);
p.sort();
System.out.println(p);
}
}`,[2],[`A. [2, 2, 5, 7]`,`B. Compilation fails at line 4`,`C. Compilation fails at line 9`,`D. Compilation fails at line 4, 9`]),
    new Question(`Which statements coule be inserted at // INSERT DECLARATION HERE to allow this code to compile and run ?

public static void main(String[] args) {
for (int i = 0; i <= 10; i++) {
List<Integer> row = new ArrayList<Integer>();
for (int j = 0; j <= 10; j++)
row.add(i * j);
table.add(row);
}
for(List<Integer> row : table)
System.out.println(row);
}
}`,[1],[`A. List<List<Integer>> table = new List<List<Integer>>();`,`B. List<List<Integer>> table = new ArrayList<List<Integer>>();`,`C. List<List<Integer>> table = new ArrayList<ArrayList<Integer>>();`,`D. None of the above`]),
    new Question(`Which, inserted independently at line 9, will compile ?

import java.util.*;
class Business { }
class Hotel extends Business { }
class Inn extends Hotel { }
public class Travel {
ArrayList<Hotel> go() {
// insert code here
}
}`,[1],[`A. return new ArrayList<lnn>();`,`B. return new ArrayList<Hotel>();`,`C. return new ArrayList<Object>();`,`D. return new ArrayList<Business>();`]),
    new Question(`Given the following code, what is the result ?

import java.util.*;
class ArrayList {
public static void main(String[] args) {
ArrayList obj = new ArrayList();
obj.add("A");
obj.add("B");
obj.add("C");
obj.add(1, "D");
System.out.println(obj);
}
}`,[1],[`A. [A, B, C, D]`,`B. [A, D, B, C]`,`C. [A, D, C]`,`D. [A, B, C]`]),
    new Question(`Given the complete contents of TestClass.java file. Which import statement should be added to make it compile ?

package x;
public class TestClass {
ArrayList<String> al;
public void init() {
al = new ArrayList<>();
al.add("Name 1");
al.add("Name 2");
}
public static void main(String[] args) throws Exception {
TestClass tc = new TestClass();
tc.init();
System.out.println("Size = " + tc.al.size());
}
}`,[2],[`A. import java.lang.*;`,`B. import java.lang.ArrayList;`,`C. import java.util.ArrayList;`,`D. import java.collections.ArrayList;`,`E. No import is necessary`]),
    new Question(`In which sequence will the characters a, b, and c be printed by the following program ?

import java.util.*;
public class ListTest {
public static void main(String[] args) {
List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add(1, "c");
List s2 = new ArrayList(s1.subList(1, 1));
s1.addAll(s2);
System.out.println(s1);
}
}`,[3],[`A. The sequence a, b, c is printed.`,`B. The sequence a, b, c, b is printed.`,`C. The sequence a, c, b, c is printed.`,`D. The sequence a, c, b is printed.`,`E. None of the above`]),
    new Question(`What will the following code print ?

List s1 = new ArrayList();
s1.add("a");
s1.add("b");
s1.add("c");
s1.add("a");
if (s1.remove("a")) {
if (s1.remove("a")) {
s1.remove("b");
} else {
s1.remove("c");
}
}
System.out.println(s1);`,[1],[`A. [b]`,`B. [c]`,`C. [b, c, a]`,`D. [a, b, c, a]`,`E. Exception at runtime`]),
    new Question(`Consider the following program and choose the appropriate option:
import java.util.*;
class Test {
public static void main(String []args) {
Set<Integer> set = new LinkedHashSet<Integer>(); //#1
LinkedHashSet<Integer> set2 = new HashSet<Integer>(); //#2
SortedSet<Integer> set3 = new TreeSet<Integer>(); //#3
SortedSet<Integer> set4 = new NavigableSet<Integer>(); //#4
}
}`,[2],[`A. Statements #1, #2, and #3 will compile successfully.`,`B. Statements #1 and #2 will compile successfully.`,`C. Statements #1 and #3 will compile successfully.`,`D. Statements #2 and #4 will compile successfully.`]),
    new Question(`Consider the following program. What will be the output of this program?
import java.util.*;
class Test {
public static void main(String []args) {
Set<Integer> set = new TreeSet<Integer>();
set.add(5);
set.add(10);
set.add(3);
set.add(5);
System.out.println(set);
}
}`,[3],[`A. [5, 10, 3, 5]`,`B. [5, 10, 3]`,`C. [10, 5, 3]`,`D. [3, 5, 10]`]),
    new Question(`Consider the following program and predict the output:
import java.util.HashSet;
class Student {
public Student(int r) {
rollNo = r;
}
int rollNo;
}
class Test {
public static void main(String[] args){
HashSet<Student> students = new HashSet<>();
students.add(new Student(5));
students.add(new Student(10));
System.out.println(students.contains(new Student(10)));
}
}`,[2],[`A. This program throws NoSuchElementException.`,`B. This program prints the following: true.`,`C. This program prints the following: false.`,`D. This program results in a compiler error.`]),
    new Question(`Consider the following program and predict the output:
import java.util.HashSet;
class Student {
public Student(int r) {
rollNo = r;
}
int rollNo;
public int hashCode(){
return rollNo;
}
}
class Test {
public static void main(String[] args) {
HashSet<Student> students = new HashSet<>();
students.add(new Student(5));
Student s10 = new Student(10);
students.add(s10);
System.out.println(students.contains(new Student(10)));
System.out.println(students.contains(s10));
}
}`,[0],[`A. false
true`,`B. true
true`,`C. true
false`,`D. false
false`]),
    new Question(`Which of these method Map interface used to obtain an element in the map having specified key?`,[1],[`A. look()`,`B. get()`,`C. set()`,`D. search()`]),
    new Question(`Which interface does java.util.Hashtable implement?`,[2],[`A. java.util.Set`,`B. java.util.Collection`,`C. java.util.Map`,`D. java.util.List`]),
    new Question(`Which interface provides the capability to store objects using a key-value pair?`,[0],[`A. java.util.Map`,`B. java.util.List`,`C. java.util.Set`,`D. java.util.Collection`]),
    new Question(`What will be the output of the following Java program?
1. import java.util.*;
2. class Maps {
3. public static void main(String args[]) {
4. HashMap obj = new HashMap();
5. obj.put("A", new Integer(1));
6. obj.put("B", new Integer(2));
7. obj.put("C", new Integer(3));
8. System.out.println(obj);
9. }
10. }`,[3],[`A. {A-1, B-1, C-1}`,`B. {A 1, B 1, C 1}`,`C. {A, B, C}`,`D. {A=1, B=2, C=3}`]),
    new Question(`To sort an ArrayList<T> by class Array, the class T must be implement the method?`,[1],[`A. Comparable<T>.compare`,`B. Comparable<T>.compareTo`,`C. Comparator<T>.compare`,`D. Sortable<T>.sortOrder`]),
    new Question(`What will be the output of the following program?
import java.util.Collections;
import java.util.LinkedList;
public class Example {
public static void main(String args[]) {
LinkedList<String> list = new LinkedList<String>();
list.add("BbB1");
list.add("bBb2");
list.add("bbB3");
list.add("BBb4");
Collections.sort(list);
for (String str : list) {
System.out.print(str + " ");
}
}
}`,[1],[`A. BbB1 bBb2 bbB3 BBb4`,`B. BBb4 BbB1 bBb2 bbB3`,`C. BBb4 bbB3 bBb2 BbB1`,`D. bbB3 bBb2 BbB1 BBb4`]),
    new Question(`Which statements are true?
public static void before() {
Set set = new TreeSet();
set.add("2");
set.add(3);
set.add("1");
Iterator it = set.iterator();
while (it.hasNext())
System.out.print(it.next() + " ");
}`,[3],[`A. The before() method will print 1 2`,`B. The before() method will print 1 2 3`,`C. The before() method will not compile`,`D. The before() method will throw an exception at runtime`]),
    new Question(`Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?`,[2],[`A. java.lang.Double`,`B. java.lang.String`,`C. java.lang.StringBuffer`,`D. java.lang.Character`]),
    new Question(`What will be the output of the following program?
public class DemoDuplication {
public static void main(String[] args) {
Set<Student> students = new HashSet<>();
students.add(new Student("Ducky", 6));
students.add(new Student("Clover", 8));
students.add(new Student("Hugo", 7));
students.add(new Student("Clover", 8));
System.out.println(students);
}
}
class Student {
String name;
int age;
Student(String name, int age) {
this.name = name;
this.age = age;
}
@Override
public String toString() {
return "[" + this.name + ", " + this.age + "]";
}
}`,[0],[`A. [[Hugo, 7], [Clover, 8], [Ducky, 6], [Clover, 8]]`,`B. [[Hugo, 7], [Clover, 8], [Ducky, 6]`,`C. [[Ducky, 6], [Hugo, 7], [Clover, 8]]`,`D. [[Ducky, 6], [Hugo, 7], [Clover, 8], [Clover, 8]]`]),
    new Question(`What will be the output of the following program?
import java.util.*;
public class CollectionsTest {
public static void main(String[] args) {
List<A> l = new ArrayList<A>();
l.add(new A(5, 4));
l.add(l.get(0));
l.add(new A(6, 0));
l.add(new A(5, 4));
l.add(new A(6));
Set<A> s = new HashSet<A>();
s.addAll(l);
System.out.print("l = " + l.size() + " s = " + s.size());
}
}
class A {
int i, j;
public A(int i, int j) { this.i = i; this.j = j; }
public A(int i) { this.i = i; }
}`,[0],[`A. l = 5 s = 4`,`B. l = 5 s = 5`,`C. l = 3 s = 3`,`D. l = 5 s = 3`,`E. Compilation Error or Runtime Error`]),
    new Question(`What will be the output of the following program?
import java.util.*;
public class Person {
private final String first, last;
public Person(String first, String last) {
this.first = first;
this.last = last;
}
public boolean equals(Object o) {
if (!(o instanceof Person))
return false;
Person n = (Person) o;
return n.first.equals(first) || n.last.equals(last);
}
public static void main(String[] args) {
Set<Person> s = new HashSet<>();
s.add(new Person("Shahrukh", "Khan"));
System.out.println(s.contains(new Person("Shahrukh", "Khan")));
}
}`,[2],[`A. true true`,`B. true`,`C. false`,`D. Compilation Error or Runtime Error`,`E. false false`]),
    new Question(`What will be the output of the following program?
public class GenericsMethodDemo {
public static <E> void printArray(E[] elements) {
for (E element : elements){
System.out.print(element);
}
}

public static void main(String args[]) {
Character[] charArray = { 'F', 'R', 'E', 'S', 'H', 'E', 'R', ' ', 'A', 'C', 'A', 'D', 'E', 'M', 'Y' };
printArray(charArray);
}
}`,[1],[`A. Compilation Error`,`B. FRESHER ACADEMY`,`C. FRESHERACADEMY`]),
    new Question(`What will be the output of the following program?
1. public class GenericsMethodDemo {
2. public static void main(String args[]) {
3. String str = "Hello";
4. printString(10);
5. printString(str);
6. }
7. public static <E> void printString(Integer str) {
8. System.out.println("Integer = " + str);
9. }
10. public static <E> void printString(E str) {
11. System.out.println("String = " + str);
12. }
13. }`,[0],[`A. Integer = 10
String = Hello`,`B. Runtime Error`,`C. String = 10
String = Hello`,`D. Compilation Error`]),
    new Question(`What will be the output of the following program?
1. public class GenericConstructorsDemo {
2. public static void main(String args[]) {
3. Gen obj = new Gen(100);
4. obj.print();
5. }
6. }
7. class Gen {
8. private double value;
9. <T extends Number> Gen(T value) {
10. this.value = value.doubleValue();
11. }
12. void print() {
13. System.out.println(value);
14. }
15. }`,[3],[`A. Runtime Error`,`B. Compilation Error`,`C. Some other output`,`D. 100`]),
    new Question(`What will be the output of the following program?
1. public class GenericsDemo {
2. public static void main(String[] args) {
3. A b = new A(20);
4. int sum = 10;
5. sum += b.ob;
6. System.out.println("Sum = " + sum);
7. }
8. }
9. class A<T> {
10. T ob;
11. public A(T ob) {
12. this.ob = ob;
13. }
14. public void print(T ob) {
15. System.out.println("Obj = " + ob);
16. }
17. }`,[0],[`A. Compilation Error`,`B. Obj = 20
Sum = 30`,`C. Obj = 10
Sum = 10`,`D. Obj = 10
Sum = 30`]),
    new Question(`What type of Exceptions can be ignored at compile time?`,[0],[`A. RuntimeException`,`B. CheckedException`,`C. Both of the above`,`D. None of the above`]),
    new Question(`Which of these not a Error?`,[3],[`A. OutOfMemoryError`,`B. IOError`,`C. VirtualMachineError`,`D. ClassNotFoundError`]),
    new Question(`What is the expected output of compiling and running this code?
class BaseClass {
public BaseClass() throws RuntimeException {
System.out.print("BaseClass");
throw new RuntimeException();
}
}
class DerivedClass extends BaseClass {
public DerivedClass() throws RuntimeException {
System.out.print("DerivedClass");
}
}
public class MainClass {
public static void main(String[] args) {
new DerivedClass(); // line 17
}
}`,[0],[`A. BaseClass will be printed then a RuntimeException would be thrown`,`B. Compile error at line 17, new DerivedClass() should be within a try/catch block`,`C. DerivedClassBaseClass`,`D. BaseClassDerivedClass`]),
    new Question(`What will be the output of the following program?
public class MyRadius {
public static int radius1;
public static int radius2;
public final static int sum = 300;
public static void setRadius(int r) {
if (r / r + 1250 < 199)
throw new IllegalArgumentException();
radius1 = r;
radius2 = sum - radius1;
}
public static void main(String[] args) {
MyRadius.setRadius(300);
System.out.println("Radius = " + radius1);
System.out.println("Radius = " + radius2);
}
}`,[0],[`A. Radius = 300
Radius = 0`,`B. Some other output`,`C. Throws an exception IllegalArgumentException`,`D. Compilation Error or Runtime Error for some other reason`]),
    new Question(`What will be the output of the following Java program?
class ExceptionTest {
public static void main(String args[]) {
try {
System.out.print("Hello" + " " + 1 / 0);
} catch(ArithmeticException e) {
System.out.print("World");
}
}
}`,[1],[`A. Hello`,`B. World`,`C. HelloWorld`,`D. Hello World`]),
    new Question(`What will be the output of the program?
public class X {
public static void main(String [] args) {
try {
badMethod();
System.out.print("A");
}
catch (RuntimeException ex) / Line 10 / {
System.out.print("B");
}
catch (Exception ex1) {
System.out.print("C");
}
finally {
System.out.print("D");
}
System.out.print("E");
}
public static void badMethod() {
throw new RuntimeException();
}
}`,[2],[`A. BD`,`B. BCD`,`C. BDE`,`D. BCDE`]),
    new Question(`Given the following
1. public class MyProgram {
2. public static void throwit() {
3. throw new RuntimeException();
4. }
5. public static void main(String args[]){
6. try {
7. System.out.println("Hello world ");
8. throwit();
9. System.out.println("Done with try block ");
10. }
11. finally {
12. System.out.println("Finally executing ");
13. }
14. }
15. }
Which answer most closely indicates the behavior of the program?`,[3],[`A. The program will print Hello world, then will print that a RuntimeException has occurred, and then will print Finally executing.`,`B. The program will not compile.`,`C. The program will print Hello world, then will print that a RuntimeException has occurred, then will print Done with try block, and then will print Finally executing.`,`D. The program will print Hello world, then will print Finally executing, then will print that a RuntimeException has occurred.`]),
    new Question(`Let guess the output of the following code when you try to compile and run it, and there is no file with name "JavaCodingConvention.txt" in the current directory?
import java.io.*;
public class Mine {
public static void main (String args[]) {
Mine m = new Mine();
System.out.println(m.amethod());
}
public int amethod() {
try {
FileInputStream dis = new FileInputStream("JavaCodingConvetion.txt");
}
catch (FileNotFoundException fne) {
System.out.println("No such file found");
return -1;
}
catch (IOException ioe) {
}
finally {
System.out.println("Doing finally");
}
return 0;
}
}`,[3],[`A. No such file found.`,`B. No such file found, -1`,`C. 0`,`D. No such file found, Doing finally, -1`]),
    new Question(`What is wrong with the following?
class Trouble {
void rightHere() {
throw new Exception();
}
}
Please select the best answer.`,[1],[`A. You cannot throw an instance of the Exception class.`,`B. The method rightHere() is not defined correctly`,`C. The throw keyword is not used correctly`]),
    new Question(`What is the result of compiling and running the following code?
public class Tester {
static void method() {
throw new Exception();
}
public static void main(String[] args) {
try {
method();
} catch (Throwable e) {
try {
throw new Exception() ;
} catch (Exception ex) {
System.out.print("exception");
} finally {
System.out.print("finally");
}
}
}
}`,[3],[`A. exception`,`B. finally`,`C. exceptionfinally`,`D. Compilation error`]),
    new Question(`What is the result of compiling and running the following code?
public class MainClass {
public static void main(String[] args) {
System.out.print("1");
try {
return;
} catch (Exception e) {
System.out.print("2");
} finally {
System.out.print("3");
}
System.out.print("4");
}
}`,[3],[`A. 1234`,`B. 1`,`C. Compilation error`,`D. 13`]),
    new Question(`If an exception is generated in try block , then it is caught in ____ block`,[2],[`A. try`,`B. finally`,`C. catch`]),
    new Question(`Given the following,
1. public class RTExcept {
2. public static void throwit () {
3. System.out.print("throwit ");
4. throw new RuntimeException();
5. }
6. public static void main(String [] args) {
7. try {
8. System.out.print("hello ");
9. throwit();
10. }
11. catch (Exception re ) {
12. System.out.print("caught ");
13. }
14. finally {
15. System.out.print("finally ");
16. }
17. System.out.println("after ");
18. }
19. }
What is the result?`,[2],[`A. hello throwit caught`,`B. Compilation fails`,`C. hello throwit caught finally after`,`D. hello throwit caught finally after RuntimeException`]),
    new Question(`Given the following,
1. import java.io.*;
2. public class MyProgram {
3. public static void main(String args[]){
4. FileOutputStream out = null;
5. try {
6. out = new FileOutputStream("test.txt");
7. out.write(122);
8. }
9. catch(IOException io) {
10. System.out.println("IO Error.");
11. }
12. finally {
13. out.close();
14. }
15. }
16. }
and given that all methods of class FileOutputStream, including close(), throw an IOException, which of these is true?`,[3],[`A. This program will compile successfully.`,`B. This program fails to compile due to an error at line 4.`,`C. This program fails to compile due to an error at line 6.`,`D. This program fails to compile due to an error at line 13.`]),
    new Question(`Given the following,
1. try {
2. Float f1 = new Float("3.0");
3. int x = f1.intValue();
4. byte b = f1.byteValue();
5. double d = f1.doubleValue();
6. System.out.println(x + b + d);
7. }
8. catch (NumberFormatException e) {
9. System.out.println("bad number");
10. }
What is the result?`,[0],[`A. 9`,`B. bad number`,`C. Compilation fails on line 3.`,`D. Compilation fails on line 4.`]),
    new Question(`What will be the output of the program?
try {
int x = 0;
int y = 5 / x;
}
catch (ArithmeticException ae) {
System.out.println(" Arithmetic Exception");
} catch (Exception e) {
System.out.println("Exception");
}
System.out.println("finished");`,[3],[`A. finished`,`B. Exception`,`C. Compilation fails.`,`D. Arithmetic Exception
finished`]),
    new Question(`What will be the output of the program?
try {
int x = 0;
int y = 5 / x;
}
catch (Exception e) {
System.out.println("Exception");
}
catch (ArithmeticException ae) {
System.out.println(" Arithmetic Exception");
}
System.out.println("finished");`,[0],[`A. Compilation fails.`,`B. Arithmetic Exception`,`C. finished`,`D. Exception`]),
    new Question(`Given the following,
1. System.out.print("Start ");
2. try {
3. System.out.print("Hello world");
4. throw new FileNotFoundException();
5. }
6. System.out.print(" Catch Here ");
7. catch(EOFException e) {
8. System.out.print("End of file exception");
9. }
10. catch(FileNotFoundException e) {
11. System.out.print("File not found");
12. }
and given that EOFException and FileNotFoundException are both subclasses of IOException, and further assuming this block of code is placed into a class, which statement is most true concerning this code?`,[2],[`A. Code output: Start Hello world End of file exception`,`B. Code output: Start Hello world Catch Here File not found.`,`C. The code will not compile.`,`D. Code output: Start Hello world File Not Found.`]),
    new Question(`What package holds the File class ?`,[0],[`A. java.io`,`B. java.file`,`C. java.util`,`D. java.lang`]),
    new Question(`What FIle method creates a new disk directory ?`,[0],[`A. mkdir();`,`B. makeDirectory();`,`C. dir()`,`D. list()`]),
    new Question(`Given the following code,
1. import java.io.*;
2. public class ReadingFor {
3. public static void main(String[] args) {
4. String s;
5. try {
6. FileReader fr = new FileReader("myfile.txt");
7. BufferedReader br = new BufferedReader(fr);
8. while((s = br.readLine()) != null)
9. System.out.println(s);
10. br.flush();
11. } catch (IOException e) { System.out.println("io error"); }
12. }
13. }
And given that myfile.txt contains the following two lines of data:
ab
cd
What is the result?`,[2],[`A. ab`,`B. abcd`,`C. Compilation fails`,`D. a
b
c
d`]),
    new Question(`What method of File is used to test if a file or directory exists ?`,[3],[`A. isFile()`,`B. isDirectory()`,`C. list()`,`D. exists()`]),
    new Question(`Which of these class is used to read charecters in a file ?`,[0],[`A. FIleReader`,`B. FileWriter`,`C. FileInputStream`,`D. InputStreamReader`]),
    new Question(`Which of these is used to read a string from the input stream ?`,[2],[`A. get()`,`B. getLine()`,`C. read()`,`D. readLine()`]),
    new Question(`Given:
import java.io.*;
class Keyboard {
}
public class Computer implements Serializable {
private Keyboard k = new Keyboard();
public static void main(String[] args) {
Computer c = new Computer();
c.storeIt(c);
}
void storeIt(Computer c) {
try {
ObjectOutputStream os = new ObjectOutputStream(
new FileOutputStream("myFile"));
os.writeObject(c);
os.close();
System.out.println("done");
} catch (Exception x) {
System.out.println("exc");
}
}
}
What is the result?`,[0],[`A. exc`,`B. done`,`C. Compilation fails`,`D. An exception is thrown at runtime`]),
    new Question(`Which of these exception is thrown in cases when the file specified for writing it not found?`,[2],[`A. IOException`,`B. FileException`,`C. FileNotFoundException`,`D. FileInputException`]),
    new Question(`Which of these class is used to read characters and strings in Java from console?`,[0],[`A. BufferedReader`,`B. StringReader`,`C. BufferedStreamReader`,`D. InputStreamReader`]),
    new Question(`Which if the following is correct about PreparedStatement?`,[0],[`A. Both of the above.`,`B. The PrepareStatement interface accepts input parameters at runtime.`,`C. Used when you plan to use the SQL statements many times.`,`D. None of the above.`]),
    new Question(`Which method is used to perform DML statements (insert, update, delete) in JDBC?`,[2],[`A. execute()`,`B. executeQuery()`,`C. executeUpdate()`,`D. executeResult()`]),
    new Question(`The method executes a simple query and returns a single ResultSet?`,[1],[`A. execute()`,`B. executeQuery()`,`C. executeUpdate()`,`D. noexecute()`]),
    new Question(`Which of the following is correct about Statement?`,[3],[`A. Useful when you are using static SQL statements at runtime.`,`B. The Statement interface can not accept parameters.`,`C. Used for general-purpose access to your database.`,`D. All of the above`]),
    new Question(`PreparedStatement is more secure because they use to bind variables, which can prevent SQL injection attack?`,[0],[`A. TRUE`,`B. FALSE`]),
    new Question(`Which of the following declaration is valid in Example.java file?`,[3],[`A. class Example {}
class Example1 {}
public class Example2 {}`,`B. public class Example {}
public class Example1 {}
public class Example 2{}`,`C. public class example {}
class Example1 {}
class Example2 {}`,`D. public class Example {}
class Example1 {}
class Example2 {}`,`E. None of the above`]),
    new Question(`Which of the following annotation tells JUnit that the public void method to which it is attached can be run as a test case?`,[2],[`A. @After`,`B. @Before`,`C. @Test`,`D. BeforeClass`]),
    new Question(`Which of the following annotation causes that method run once before any of the test methods in the class?`,[0],[`A. @BeforeClass`,`B. @AfterClass`,`C. @Test`,`D. @Before`]),
    new Question(`Which of the following annotation causes that method to be run before each Test method?`,[0],[`A. @Before`,`B. @BeforeClass`,`C. @After`,`D. @Test`]),
    new Question(`Which of the following method of Assert class checks that two primitives/Objects are equal?`,[0],[`A. void assertEquals(boolean expected, boolean actual)`,`B. void assert(boolean expected, boolean actual)`,`C. void assertChecks(boolean expected, boolean actual)`,`D. void assertCheck(boolean expected, boolean actual)`]),
    new Question(`Which of the following method of Assert class fails a test with no message?`,[2],[`A. void assert(boolean pass)`,`B. void assertChecks(boolean pass)`,`C. void fail()`,`D. void assertCheck(boolean pass)`]),
    new Question(`Which of the following method of Assert class checks whether two arrays are equal to each other?`,[2],[`A. void assert(Object[] expectedArray, Object[] resultArray,boolean isSame)`,`B. void assertCheck(Object[] expectedArray, Object[] resultArray,boolean isSame)`,`C. void assertArrayEquals(Object[] expectedArray, Object[] resultArray)`,`D. void assertChecks(Object[] expectedArray, Object[] resultArray,boolean isSame)`]),
    new Question(`Which of the following method of Assert class checks if two object references point to the same object?`,[1],[`A. void assert(Object expected, Object actual)`,`B. void assertSame(Object expected, Object actual)`,`C. void assertChecks(Object expected, Object actual)`,`D. void assertCheck(Object expected, Object actual)`]),
    new Question(`Which of the following method of Assert class checks that an object isn't null?`,[2],[`A. void assert(Object object, boolean toCheckAsNull)`,`B. void assertCheck(Object object, boolean toCheckAsNull)`,`C. assertNotNull(Object object)`,`D. void assertChecks(Object object, boolean toCheckAsNull)`]),
    new Question(`Which of the following method of Assert class checks that a condition is true?`,[0],[`A. void assertTrue(boolean condition)`,`B. void assertCheck(boolean condition)`,`C. void assert(boolean condition)`,`D. void assertChecks(boolean condition)`]),
    new Question(`Which of the following class is a Composite of Tests?`,[3],[`A. Assert`,`B. TestCase`,`C. TestResult`,`D. TestSuite`]),
    new Question(`@RunWith and @Suite annotation are used to run the suite test?`,[1],[`A. true`,`B. false`]),
    new Question(`JSON stands for`,[1],[`A. Java Standard Output Network`,`B. JavaScript Object Notation`,`C. JavaScript Output Name`,`D. Java Source Open Network`]),
    new Question(`Which is correct format of writing JSON name/value pair ?`,[3],[`A. 'name=value'`,`B. name: 'value'`,`C. name = "value"`,`D. "name":"value"`]),
    new Question(`What of the following is not a type in JSON ?`,[0],[`A. date`,`B. Object`,`C. Array`,`D. string`]),
    new Question(`Can you use a double quote inside a JSON string ?`,[2],[`A. No, you should use single quotes`,`B. Yes, if you use the ascii code`,`C. Yes, if it is escaped like (\\")`,`D. Yes, you can use it without any special treatment`]),
    new Question(`JSON elements are separated by the ____ ?`,[2],[`A. line break`,`B. semi-colon`,`C. comma`,`D. white space`]),
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
    let checkKey = false;
    switch (event.key) {
        case "a":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
            checkKey = true;
            break;
    }

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
            background-color: rgba(255,255,255,0.9); border-radius: 20px; z-index: 9000;
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
        // console.log(dataQuestion)
        if (dataQuestion){
            element.innerHTML = dataQuestion.getData();
        } else {
            element.innerHTML = `not matching any question on database`
        }
    } else {
        // console.log("Element with id 'lqt-show' not found");
    }
}
let hiddenTable = () => {
    let element = document.getElementById("lqt-show");
    if (element) {
        element.style.display = "none";
    } else {
        // console.log("Element with id 'lqt-show' not found");
    }
}

setupEvent();