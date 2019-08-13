function FormValidator() {
    // validation for add feedback page
    var form = $("#ReminderForm");
    form.validate({
        rules: {
            EventName: {
                required: true,
            },
            EventLocation:{
                required: true,
            },
            EventTime:{
                required:true,
            }
        },
        messages: {
            EventName: {
                required: "Event Name Is Required",

            },
            EventLocation:{
                required:"Event Location Is Required"
            },
            EventTime: {
                required:"Event Date Is Required"
            }
            }


    });

    return form.valid();
}
