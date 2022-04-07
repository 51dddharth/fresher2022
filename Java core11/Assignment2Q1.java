
class SingletonInheritanceCheck{
    private static  SingletonInheritanceCheck singletonInheritanceCheck = null;
    private SingletonInheritanceCheck(){}
    public static SingletonInheritanceCheck getSingleton(){
        if(singletonInheritanceCheck==null)
            singletonInheritanceCheck = new SingletonInheritanceCheck();
        return singletonInheritanceCheck;
    }
}
public class Assignment2Q1 {
    public static void main(String[] args) {
        SingletonInheritanceCheck singletonInheritanceCheck = SingletonInheritanceCheck.getSingleton();
        System.out.println(singletonInheritanceCheck);
        SingletonInheritanceCheck singletonInheritanceCheck1 = SingletonInheritanceCheck.getSingleton();
        System.out.println(singletonInheritanceCheck1);


    }
}
