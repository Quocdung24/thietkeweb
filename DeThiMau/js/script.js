// coding implementation
function checknull(txt)
		{
			if(txt.value.length==0)
				return true;
			else
				return false;
		}
        function validform(f)
		{
			
			if(checknull(f.email))
			{
				alert(f.email.name + " must be not null");
				f.email.focus();
				return;
			}
			if(checknull(f.com))
			{
				alert(f.com.name + " must be not null");
				f.com.focus();
				return;
			}
            if(checknull(f.rate))
			{
				alert(f.rate.name + " must be not null");
				f.rate.focus();
				return;
			}
			if(isNaN(f.rate.value))
			{
				alert(f.rate.name + " must be a number");
				f.rate.value="";
				f.rate.focus();
				return;
			}
            const floatValue = parseFloat(f.rate);
			if(!isNaN(floatValue))
			{   

				alert(f.rate.name + " must be an real number");
				f.rate.value="";
				f.rate.focus();
				return;
			}
			if(eval(f.rate.value)<=0 || eval(f.rate.value)>=10)
			{
				alert(f.rate.name + " must be in (0-10)");
				f.rate.value="";
				f.rate.focus();
				return;
			}
			
			if(!StringMatch(f.email, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
			{
				alert("email is not valid")
				return;
			}
		}
        function StringMatch(txt, reg)
		{
			return reg.test(txt.value);	
		}
						
                        

// end coding implementation