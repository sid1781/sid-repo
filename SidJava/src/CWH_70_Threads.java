/*

In Java, threads are a fundamental part of concurrent programming, allowing multiple tasks to execute concurrently within a single program.
Threads are instances of the Thread class or objects that implement the Runnable interface.
Here are some key points about threads in Java:

Extending the Thread Class:

You can create a thread by extending the Thread class and overriding its run method. Here's a simple example:

java
Copy code
class MyThread extends Thread {
    public void run() {
        // Code to be executed in the thread
    }
}

// Create and start the thread
MyThread myThread = new MyThread();
myThread.start();
Implementing the Runnable Interface:

Alternatively, you can create a thread by implementing the Runnable interface. This is often preferred because it allows better separation of concerns between the thread's behavior and the class it belongs to:

class MyRunnable implements Runnable {
    public void run() {
        // Code to be executed in the thread
    }
}

// Create and start the thread
Thread myThread = new Thread(new MyRunnable());
myThread.start();
Thread Lifecycle:

Threads in Java go through different states: new, runnable, blocked, waiting, timed waiting, and terminated. You can manage the thread's lifecycle using methods like start, sleep, join, etc.
Thread Synchronization:

In a multithreaded environment, synchronization is crucial to prevent race conditions and ensure data consistency. Java provides keywords like synchronized and classes like ReentrantLock for synchronization.
Thread Priorities:

Threads in Java can have priority levels ranging from Thread.MIN_PRIORITY to Thread.MAX_PRIORITY. The default priority is Thread.NORM_PRIORITY.
Thread Safety:

When multiple threads access shared resources, proper synchronization is necessary to maintain thread safety and prevent data corruption.
Concurrency Utilities:

Java provides the java.util.concurrent package with utilities for concurrent programming, including thread pools, semaphores, locks, and other high-level abstractions.
Thread Groups:

Threads in Java can be organized into thread groups, providing a way to manage and manipulate multiple threads as a single unit.
Executor Framework:

The Executor framework simplifies the management of thread execution. It is part of the java.util.concurrent package and provides a higher-level replacement for manually managed threads.
Callable and Future:

The Callable interface is similar to Runnable but can return a result. The Future interface represents the result of an asynchronous computation and provides methods to check if the computation is complete and retrieve the result.
 */


class MyThread1 extends Thread {
    public void run() {
        int i = 0;
        while (i < 40000){
            System.out.println("I am Thread one");
        System.out.println("Iam Cooking");
        i++;
    }
    }
}
class MyThread2 extends Thread {
 public void run()
    {
        int i=0;
        while(i<40000){
            System.out.println("Iam Thread Two");
            System.out.println("Iam Chatting");
            i++;
        }

    }

}
public class CWH_70_Threads {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();
        MyThread2 t2 = new MyThread2();
        t1.start();
        t2.start();

    }
}
