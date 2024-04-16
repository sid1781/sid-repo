/*
   States:
   New : Instance of a Thread is created but it is not started by invoking the start method.
   Runnable :After Invocation of start() and before it is selected to be run by the scheduler(Like the thread is ready to run)
   Running :After Thread scheduler has selected it to run
   Non runnable:Thread alive but not eligible to run : (Like when the eecution is happening and the current running thread is waiting for server response in that case
   thread scheduler will pick the next thread in que and it will push current running thread to non-runnable state. once the server responds back. then thread scheduler will p
   pick up the non-runnable thread and completes it.
   Terminated : run() method has exited.
 */

public class CHW_72_ThreadLifeCycle {
    public static void main(String[] args) {

    }
}
