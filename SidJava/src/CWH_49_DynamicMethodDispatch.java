class Phone{
      public void music()
      {
          System.out.println("Playing music");
      }
      public void on()
      {
          System.out.println("Turning on phone...");
      }
}
class SmartPhone extends Phone{
    public void showTime()
    {
        System.out.println("Time is 4pm");
    }
    public void on(){
        System.out.println("Turning on smartPhone");
    }
}

public class CWH_49_DynamicMethodDispatch {
    public static void main(String[] args) {

        Phone obj= new SmartPhone();

        obj.on();
        obj.music();
//        obj.showTime();  not allowed
    }
}
