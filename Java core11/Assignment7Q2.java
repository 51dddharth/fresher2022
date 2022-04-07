import java.lang.annotation.*;

public class Assignment7Q2 {
    @Inherited
    @Target({ElementType.TYPE_USE, ElementType.TYPE})
    @Retention(RetentionPolicy.RUNTIME)
    @interface info
    {
        String AuthorId() default "none";
        String Date()  default "none";
        String Time() default "none";
        float Version();
    }
    @info(AuthorId = "15254",Date = "15-6-2000",Time = "9.53",Version = 221)
    static class developer {
        int AuthorID;
        String Author ;
        String Supervisor ;
        String Date;
        String Time;
        float Version;
        String Description;
        public developer(int AuthorID, String Date, String Time, float Version) {
            this.AuthorID = AuthorID;
            this.Date = Date;
            this.Time = Time;
            this.Version = Version;
        }
    }
    public static void main(String[] args) {
        developer obj=new developer(25650,"15-07-2000","8.30",2);
        Class c=obj.getClass();
        Annotation an=c.getAnnotation(info.class);
        info s=(info) an;
        System.out.println(s.AuthorId());
        System.out.println(s.Version());
        System.out.println(s.Time());
        System.out.println(s.Date());
    }}
