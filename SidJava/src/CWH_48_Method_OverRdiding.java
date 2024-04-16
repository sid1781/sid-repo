class A{

    public void  method1()
    {
        System.out.println("Method of a class");
    }
}
class B extends A{
    public int method2()
    {
//        System.out.println("Method of b class");
        return 3;
    }
}
class C extends B{

    @Override
    public void method1()
    {
        System.out.println("A class method over-ride in c class");
    }

    public int  method2()
    {
//        System.out.println("B class method over-ride in c class");
        return 1;
    }
    public void method3()
    {
        System.out.println("Method of c class");
    }
}

public class CWH_48_Method_OverRdiding {
    public static void main(String[] args) {

        C c= new C();
        B b=new B();
//        b.method1();
        System.out.println(b.method2());
//        c.method3();
        System.out.println(c.method2());
    }
}
