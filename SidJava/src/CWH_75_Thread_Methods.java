/*
1)start():
Initiates the execution of the thread. The run method of the thread is called asynchronously.
Thread myThread = new MyThread();
myThread.start();

2) run():
Contains the code that constitutes the new thread. It needs to be overridden when creating a new thread by extending the Thread class or implementing the Runnable interface.
class MyThread extends Thread {
    public void run() {
        // Code to be executed in the thread
    }
}
3)sleep(long milliseconds):
Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds.
try {
    Thread.sleep(1000); // Sleep for 1 second
} catch (InterruptedException e) {
    e.printStackTrace();
}
4)join():
Waits for the current executing thread to die. It makes sure that the current thread execution is done and then only it will pick the next thread.

Thread anotherThread = new AnotherThread();
anotherThread.start();

try {
    anotherThread.join(); // Wait for anotherThread to complete
} catch (InterruptedException e) {
    e.printStackTrace();
}
5)yield():
It's a way of indicating that other threads can be scheduled in its place.
currently executing thread  voluntarily pauses its execution, allowing other threads to run.
Thread.yield(); // Suggest to the scheduler that the thread is willing to yield its time
interrupt():

Interrupts the thread, causing it to stop its execution if it is in a blocking state (e.g., sleeping or waiting). It is often used to gracefully stop a thread.

Thread myThread = new MyThread();
myThread.start();

// Somewhere else in the code
myThread.interrupt(); // Interrupt the thread
isAlive():

Returns true if the thread upon which it is called is still running; otherwise, it returns false.
java
Copy code
if (myThread.isAlive()) {
    // Thread is still running
} else {
    // Thread has completed
}
setName(String name), getName():

Sets or gets the name of the thread, respectively.
java
Copy code
myThread.setName("MyThread");
String threadName = myThread.getName();
setPriority(int priority), getPriority():

Sets or gets the priority of the thread. The priority range is from Thread.MIN_PRIORITY (1) to Thread.MAX_PRIORITY (10), with Thread.NORM_PRIORITY (5) being the default.
java
Copy code
myThread.setPriority(Thread.MAX_PRIORITY);
int threadPriority = myThread.getPriority();
 */

public class CWH_75_Thread_Methods {
}
