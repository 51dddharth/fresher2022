public class Assignment10Q2 {
    public static void main(String[] args) {

       /* case1:var cannot be used in an instance and global variable declaration
package com.company;
        class Main {

            var x = 50;
            public static void main(String[] args)
            {
                System.out.println(x);
            }}
        case2:var cannot be used as a Generic type
package com.company;

import java.util.*;
        class Main {
            public static void main(String[] args)
            {
                var<var>al = new ArrayList<>();
                al.add(10);
                al.add(20);
                al.add(30);
                System.out.println(al);
            }
        }
        case3:var cannot be used with the generic type
package com.company;

import java.util.*;
        class Main {
            public static void main(String[] args)
            {
                var<Integer> al = new ArrayList<Integer>();
                al.add(10);
                al.add(20);
                al.add(30);
                System.out.println(al);
                var list = new ArrayList<String>();
            }
        }
        case4:var cannot be used without explicit initialization
package com.company;
import java.io.*;
        class Main {
            public static void main(String[] args)
            {
                var variable;
                var variable = null;
            }
        }
        case5: var cannot be used with Lambda Expression
package com.company;
import java.util.*;
        interface myInt {

            int add(int a, int b);
        }
        class Main {
            public static void main(String[] args)
            {
                var obj = (a, b) -> (a + b);
                System.out.println(obj.add(2, 3));
            }
        }
        case6:var cannot be used for method parameters and return type
        class Main {
            var method1() { return ("Inside Method1"); }
            void method2(var a) { System.out.println(a); }
            public static void main(String[] args)
            {
                Demo1 obj = new Demo1();
                var res = obj.method1();
                obj.method2();
            }
        }*/


    }
}
