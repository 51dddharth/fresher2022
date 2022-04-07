public class Assignment10Q1 {
    @FunctionalInterface
    interface Interest {
        float operations(float p, float n, float r);
    }
    public static void main(String[] args) {
        Interest Interest = (float p, float n, float r) -> (p*n*r)/(100);
        System.out.println("principle interest is " + Interest.operations(4,5,8));
    }
}
