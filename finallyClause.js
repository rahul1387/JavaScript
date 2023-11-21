try 
{
    // console.log(program);
    console.log("Program ran successfully");    
} catch (err) 
{
    console.log("This is an error");
    console.log(abcd);
}
finally
{
    console.log("This is finall code");
}
// finally will run if there error in catch also.


// if finally code is in function and if that function returns something,so before returning the finally code will execute.
const y = ()=>{
    try 
    {
        // console.log(program);
        console.log("Program ran successfully");
        return ;  
    } catch (err) 
    {
        console.log("This is an error");
        console.log(abcd);
    }
    finally
    {
        console.log("This code will before return");
    }
}
y();