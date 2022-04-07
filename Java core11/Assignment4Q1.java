public class Assignment4Q1 {
    public static void main(String[] args) {
        // write your code here
        try{
            int num1=10, num2=0;
            int output=num1/num2;
            System.out.println ("Result: "+output);
        }
        catch(ArithmeticException e){
            System.out.println ("You Shouldn't divide a number by zero");
        }
    }
}
