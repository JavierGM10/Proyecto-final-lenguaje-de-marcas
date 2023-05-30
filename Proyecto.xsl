<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
       <h2>Mi trabajo final de Lenguaje de marcas</h2>
          <table border = "1">
            <tr bgcolor = "blue">
              <th>descripcion</th>
              <th>explicacion</th>
              </tr>
              <xsl:for-each select="proyecto">
                <tr>
                <td><xsl:value-of select="descripcion"></xsl:value-of></td>
                <td><xsl:value-of select="explicacion"></xsl:value-of></td>
                </tr>
              </xsl:for-each>
          </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>