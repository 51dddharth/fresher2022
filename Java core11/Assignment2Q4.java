//abstract parent class
abstract class Animal{
    //abstract method
    public abstract void sound();
}
//Dog class extends Animal class
public class Assignment2Q4 extends Animal{

    public void sound(){
        System.out.println("Woof");
    }
    public static void main(String args[]){
        Animal obj = new Assignment2Q4();
        obj.sound();
    }
}
