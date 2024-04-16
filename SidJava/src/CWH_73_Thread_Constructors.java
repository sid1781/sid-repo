//Thread Constructors


class MyThread3 extends Thread {

    public MyThread3(String name){
        super(name);
    }
      public void run()
      {
          System.out.println("Iam Thread 1");
      }
}

public class CWH_73_Thread_Constructors {
    public static void main(String[] args) {
        MyThread3 t1 = new MyThread3("Sid");
        MyThread3 t2= new MyThread3("Nags");
        t1.start();
        t2.start();
        System.out.println("The id of the Thread t1 is " + t1.getId());
        System.out.println("The name of the Thread t2 is " + t1.getName());
        System.out.println("The id of the Thread t2 is " + t2.getId());
        System.out.println("The name of the Thread t2 is " + t2.getName());
    }
}
