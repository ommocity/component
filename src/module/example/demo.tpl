{{#if this.beans.length}}
	{{#each this.beans}}
		<tr>
            <td><input type="checkbox" value="{{id}}"></td>
            <td>{{name}}</td>
            <td>{{price}}</td>
            <td>{{type}}</td>
            <td><div class="gridNum">{{sell}}</div></td>
            <td><div class="gridNum">{{inventory}}</div></td>
            <td>{{addDate}}</td>
            <td></td>
            <td width="110">
                <div class="gridRowBtn">
                    <div class="gridRowBtn">
                    </div>
                </div>
            </td>
        </tr>
    {{/each}}
{{else}}
	<tr>
		<td>对不起，没有数据！</td>
	</tr>
{{/if}}