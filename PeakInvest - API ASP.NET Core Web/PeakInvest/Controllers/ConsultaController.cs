using Microsoft.AspNetCore.Mvc;
using PeakInvest.Models;

[Route("[controller]")]
[ApiController]
public class ConsultaController : ControllerBase
{
    private readonly List<ConsultaModel> lista = new List<ConsultaModel>
    {
        new ConsultaModel { id = 1, nome = "João" },
        new ConsultaModel { id = 2, nome = "Maria" },
        new ConsultaModel { id = 3, nome = "Ana" }
    };

    [HttpGet("{id}")]
    public ActionResult<string> ObterNomePorId(int id)
    {
        var item = lista.Find(x => x.id == id);
        if (item == null)
        {
            return NotFound(); // ID não encontrado
        }
        Console.WriteLine(item.nome);
        return item.nome;
    }
}
