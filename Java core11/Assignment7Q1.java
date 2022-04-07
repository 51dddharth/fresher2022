import java.lang.annotation.*;

public class Assignment7Q1 {
    @Inherited
    @Retention(RetentionPolicy.RUNTIME)
    @Target(ElementType.METHOD)
    @ interface Test{
    }
    static class jim{
        @Test
        public void pam(){
            System.out.println("Test-case");
        }
    }
    public static void main(String[] args) {
        jim obj=new jim();
        obj.pam();
    }
}