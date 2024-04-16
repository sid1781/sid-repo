
//The priority of the thread is decided by the OS. sometime normal priority will be made available when there is a sufficient memory is available
class  MyThread5 extends Thread{

     public MyThread5(String name)
     {
         super(name);
     }
     public void run()
     {
         System.out.println("Thread name is " + this.getName());
     }
}

public class CHW_74_ThreadProperties {
    public static void main(String[] args) {

        MyThread5 t1= new MyThread5("sid1");
        MyThread5 t2= new MyThread5("sid2");
        MyThread5 t3= new MyThread5("sid3");
        MyThread5 t4= new MyThread5("sid4");
        MyThread5 t5= new MyThread5("sid5");
        t1.setPriority(Thread.MAX_PRIORITY);
        t2.setPriority(Thread.MIN_PRIORITY);
        t3.setPriority(Thread.NORM_PRIORITY);
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();

    }
}
