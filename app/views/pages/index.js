d3.select();
d3.selectAll();

chart = {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);
  
  svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(bins)
    .join("rect")
      .attr("x", d => x(d.x0) + 1)
      .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr("y", d => y(d.length))
      .attr("height", d => y(0) - y(d.length));

  svg.append("g")
      .call(xAxis);
  
  svg.append("g")
      .call(yAxis);
  
  return svg.node();
}
  height = 720
  margin = ({top: 20, right: 30, bottom: 30, left: 40})
  x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.x)).nice()
    .range([margin.left, width - margin.right])
  y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.y)).nice()
    .range([height - margin.bottom, margin.top])
  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").clone()
        .attr("y2", -height)
        .attr("stroke-opacity", 0.1))
    .call(g => g.append("text")
        .attr("x", width - 4)
        .attr("y", -4)
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .attr("fill", "black")
        .text(data.x)
        .call(halo))
  yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "$.2f"))
    .call(g => g.select(".domain").remove())
    .call(g => g.selectAll(".tick line").clone()
