//P1:Create a abstract class pen with methods write() and refill() as abstract methods.
abstract class Pen {
      abstract public void write();

      abstract public void refill();
}

class FountainPen extends Pen{
    @Override
    public void write() {
        System.out.println("Write my name");
    }

    @Override
    public void refill() {
        System.out.println("Refill the pen");
    }
    public void changeNib()
    {
        System.out.println("Changing the nib");
    }
}
class Monkey{
    void bite(){
        System.out.println("Bite");
    }
    void jump()
    {
        System.out.println("Jump");
    }
}

interface BasicAnimal{
    void eat();
    void sleep();
}
class Human extends Monkey implements BasicAnimal{

   public void eat()
    {
        System.out.println("Eat");
    }
    public void sleep()
    {
        System.out.println("Sleep");
    }

}
abstract class Telephone {
abstract     void ring();
    abstract void lift();

 abstract    void disconnect();


}

class SmartPhone12 extends Telephone{

    public void ring()
    {
        System.out.println("Ring");
    }
    public void lift()
    {
        System.out.println("lift");
    }
    public void disconnect()
    {
        System.out.println("Disconnect");
    }

}


public class CWH_60_Chapter11_Problems {
    public static void main(String[] args) {
//         Human h= new Human();
//          h.eat();
//          h.sleep();
//          h.jump();
//          h.bite();

//        SmartPhone12  sm= new SmartPhone12();
//        sm.ring();
//        sm.lift();
//        sm.disconnect();

        Monkey h=new Human();
        h.bite();
        h.jump();
        //h.eat(): this is not allowed because the reference is monkey and it does not contain the eat method. we can only call methods which are present in reference class.

    }
}
