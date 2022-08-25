let loading = $("#loading");
loading.hide();

$("#boton").click(() => {
  loading.show();
  $.get("http://localhost:5000/amigos/", function (data) {
    loading.hide();
    let lista = $("#lista");
    lista.empty();
    data.forEach((amigo) => {
      let element = document.createElement("li");
      element.innerHTML = amigo.name;
      lista.append(element);
    });
  });
});

$("#search").click(() => {
  let span = $("#amigo");
  let input = $("#input");
  span.text("");

  $.get("http://localhost:5000/amigos/" + input.val(), function (data) {
    span.text(data.name);
    input.val("");
  });
});

$("#delete").click(() => {
  let span = $("#sucess");
  let input = $("#inputDelete");
  span.text("");
  $.ajax("http://localhost:5000/amigos/" + input.val(), {
    method: "DELETE",
  }).done(() => {
    span.text("Tu amigo fue borrado con exito.");
  });
});
