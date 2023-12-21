using Microsoft.AspNetCore.Mvc;
using PeakInvest.Models;

[Route("[controller]")]
[ApiController]
public class CalculoController : ControllerBase
{
    [HttpPost]
    public IActionResult Calcular([FromBody] CadastroModel model)
    {
        try
        {
            // Realizar o cálculo: (valor * parcelas) + 5%
            decimal resultado = (model.valor * model.parcelas) * 1.05m;
            // Retornar o resultado
            return Ok(new { Resultado = resultado });
        }
        catch
        {
            // Em caso de erro
            return StatusCode(500, new { Mensagem = "Erro ao realizar o cálculo." });
        }
    }
}