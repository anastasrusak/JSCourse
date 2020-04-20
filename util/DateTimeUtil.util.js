class DateTimeUtil {

    today(){
        let now = new Date();
        return now.getFullYear().toString()+'-'+ (now.getMonth()+1).toString() +'-'+ now.getDate().toString();
    }

    setDateYear(date, year){
        let now = new Date();
        now.setFullYear(year);
        now.setDate(date);
        return now.getFullYear().toString()+'-'+ (now.getMonth()+1).toString() +'-'+ now.getDate().toString();
   }


    daysDifference(dateLeft, dateRight){
        let Dt1 = new Date();
        let Dt2 = new Date();
        Dt1.setDate(dateLeft);
        Dt2.setDate(dateRight);
        return (Dt1.setDate(dateLeft) - (Dt2.setDate(dateRight)));
    }
 
 }



module.exports = new DateTimeUtil();