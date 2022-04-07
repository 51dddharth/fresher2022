class Assignment10Q4
{
    public static void main(String s[])
    {
        Student st1 = new Student("Jim", 34, 'A');
        Student st2 = new Student("Michael", 78, 'B');
        Student st3 = new Student("Kelly", 65, 'A');
        System.out.println("Number of students after: " + Student.count);
        System.out.println(st1.name);
        System.out.println(st2.name);
        System.out.println(st3.name);
    }
    static class Student
    {
        static int count = 0;
        String name;
        int marks;
        char section;
        Student(String name, int marks, char section)
        {
            this.name = name;
            this.marks = marks;
            this.section = section;
            count++;
        }
    }}