
document.addEventListener('DOMContentLoaded', function () {

var calendarEl = document.getElementById('calendar');

if(calendarEl){

var calendar = new FullCalendar.Calendar(calendarEl, {
initialView: 'dayGridMonth',
selectable: true,
select: function(info){
alert("Tanggal dipilih: " + info.startStr);
}
});

calendar.render();

}

});
