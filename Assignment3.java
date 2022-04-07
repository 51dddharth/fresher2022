public class Assignment3 {

    public static void main(String[] args) {
        // write your code here
        //Q1
        String str1= "Hello World";
        System.out.println(str1.length());

        //Q2
        String str2 ="Hello ";
        String str3= str2.concat("How are you?");
        System.out.println(str3);

        //Q3
        String str4="Java String pool refers to collection of Strings which are stored in heap memory";
        System.out.println(str4.toLowerCase());
        System.out.println(str4.toUpperCase());
        System.out.println(str4.replace('a','$'));
        System.out.println(str4.contains("collection"));
        System.out.println(str4.equals("java string pool refers to collection of strings which are stored in heap memory"));
        System.out.println(str4.compareTo("java string pool refers to collection of strings which are stored in heap memory"));

        //Q4
        StringBuffer str5=new StringBuffer("String Buffer");
        str5.append(" is a peer class of String");
        str5.append(" that provides much of");
        str5.append(" the functionality of strings");
        System.out.println(str5);

        StringBuffer str5_1 =new StringBuffer("It is used to _ at the specified index position");
        str5_1.replace(14,15,"insert text");
        System.out.println(str5_1);

        StringBuffer str5_2 = new StringBuffer("This method returns the reversed object on which it was called");
        System.out.println(str5_2.reverse());

        //Q4
        StringBuilder str6=new StringBuilder("String Buffer");
        str6.append(" is a peer class of String");
        str6.append(" that provides much of");
        str6.append(" the functionality of strings");
        System.out.println(str6);

        StringBuilder str6_1 =new StringBuilder("It is used to _ at the specified index position");
        str6_1.replace(14,15,"insert text");
        System.out.println(str6_1);

        StringBuilder str6_2 = new StringBuilder("This method returns the reversed object on which it was called");
        System.out.println(str6_2.reverse());

    }
}