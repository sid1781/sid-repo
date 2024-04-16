class GoodMorning extends Thread {

    public void run()
    {
        while (true){
            System.out.println("Good Morning");

        }
    }
}
class Welcome implements Runnable {

    public void run()
    {
        try {
            Thread.sleep(200);
            int i=0;
            while (i<=100){
                System.out.println("Welcome");
                i++;
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

    }
}

public class CWH_76_Threads_Practice {
    public static void main(String[] args) {

        GoodMorning g1= new GoodMorning();
        Welcome  w1 = new Welcome();
//         g1.start();
         Thread t1= new Thread(w1);
         t1.start();
        System.out.println(t1.getState());
   t1.setPriority(6);
   g1.setPriority(7);
        System.out.println(t1.getPriority());
        System.out.println(g1.getPriority());

        //Reference of a current thread

        System.out.println(Thread.currentThread().getState());


    }
}
