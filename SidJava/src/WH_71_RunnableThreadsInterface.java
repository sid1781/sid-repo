
class MyRunnableThread1 implements Runnable{
     public void run()
     {
         while (true){
             System.out.println("Iam Runnable thread 1 ");
         }
     }

}
class MyRunnableThread2 implements Runnable{
     public void run()
     {
         while (true){
             System.out.println("Iam Runnable Thread 2");
         }
     }
}

public class WH_71_RunnableThreadsInterface {
    public static void main(String[] args) {

        MyRunnableThread1 bullet1 = new MyRunnableThread1();
                Thread gun1= new Thread(bullet1);

        MyRunnableThread2  bullet2 = new MyRunnableThread2();
         Thread gun2 = new Thread(bullet2);

         gun1.start();
         gun2.start();

    }
}
