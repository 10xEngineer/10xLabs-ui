// initialize our faux database
var data = {
    widgets:[
        {
            page:'dashboard',
            container:'left-column',
            type:'important-messages',
            title:'Action Required',
            data:{
                rows:[
                    {icon:'warning', message:'Invoice required', timestamp:'2012-09-05T09:24:17Z'},
                    {icon:'notification', message:'New message from support', timestamp:'2012-09-02T09:24:17Z'},
                    {icon:'warning', message:'Low memory', timestamp:'2012-08-28T10:12:00Z'},
                    {icon:'notification', message:'New message from support', timestamp:'2012-08-15T02:37:27Z'},
                    {icon:'notification', message:'Update available', timestamp:'2012-08-13T12:01:08Z'}
                ]
            }
        },
        {
            page:'dashboard',
            container:'left-column',
            type:'recent-events',
            title:'Recent Events',
            data:{
                rows:[
                    {icon:'icon-01', title:'Title', description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-09-05T09:24:17Z'},
                    {icon:'icon-02', title:'Title', description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-09-02T09:24:17Z'},
                    {icon:'icon-01', title:'Title', description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-08-28T10:12:00Z'},
                    {icon:'icon-01', title:'Title', description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. from support', timestamp:'2012-08-15T02:37:27Z'},
                    {icon:'icon-02', title:'Title', description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-08-13T12:01:08Z'}
                ]
            }

        },
        {
            page:'dashboard',
            container:'left-column',
            type:"service-feed",
            title:"Service Feed",
            data:{}
        },
        {
            page:'dashboard',
            container:'right-column',
            type:'labs',
            title:'Labs',
            data:{
                rows:[
                    {icon:'icon-01', title:'Title', description:'Voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-09-05T09:24:17Z'},
                    {icon:'icon-02', title:'Title', description:'Laudantium, totam rem aperiam. Laudantium, totam rem aperiam.', timestamp:'2012-09-02T09:24:17Z'},
                    {icon:'icon-01', title:'Title', description:'Iste natus error sit. Laudantium, totam rem aperiam. Voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-08-28T10:12:00Z'},
                    {icon:'icon-01', title:'Title', description:'Laudantium, totam rem aperiam. Laudantium, totam rem aperiam. from support', timestamp:'2012-08-15T02:37:27Z'},
                    {icon:'icon-02', title:'Title', description:'Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', timestamp:'2012-08-13T12:01:08Z'}
                ]
            }

        },
        {
            page:'lab',
            container:'left-column',
            type:'lab-overview',
            title:'Overview',
            data:{
                title:'Deathstar',
                description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
            }
        },
        {
            page:'lab',
            container:'left-column',
            type:'lab-current-state',
            title:'Current state',
            data:{
                boxes:[
                    {
                        type:'critical-issues',
                        title:'critical issues',
                        messages:[
                            {title:'Main system is going to blow up in 2 hours.'},
                            {title:'Low space on hard drive.'}
                        ]
                    },
                    {
                        type:'alerts',
                        title:'alerts',
                        messages:[
                            {title:'Main system is going to blow up in 2 hours.'},
                            {title:'Low space on hard drive.'},
                            {title:'No food left for workers.'}
                        ]
                    },
                    {
                        type:'running-good',
                        title:'running good',
                        messages:[
                            {title:'System backup complete.'},
                            {title:'System backup 2 complete.'},
                            {title:'MySQL instance launched.'},
                            {title:'Support service.'},
                            {title:'MongoDB instance launched.'}
                        ]
                    }
                ]
            }
        },
        {
            page:'lab',
            container:'right-column',
            type:'lab-actions',
            title:"Actions",
            data:{
                buttons:[
                    {title:'New lab', description:'Sed ut perspiciatis unde omnis iste natus.', action:'new-lab'},
                    {title:'New app', description:'Natus Sed ut unde iste perspiciatis.', action:'new-app'},
                    {title:'Backup', description:'Natus Sed ut unde omnis iste perspiciatis.', action:'backup'},
                    {title:'Support', description:'Natus Sed ut unde omnis iste perspiciatis.', action:'support'}
                ]
            }
        },
        {
            page:'lab',
            container:'right-column',
            type:'lab-performance',
            title:"Performance",
            data:{}
        },
        {
            page:'lab',
            type:'lab-tabs',
            data:{
                tabs:[
                    {title:'Events'},
                    {title:'Repository'},
                    {title:'Bundles'}
                ]
            }
        }
    ]
};

// GET
exports.widgets = function (req, res) {
    var widgets = [];
    data.widgets.forEach(function (widget, i) {
        widgets.push({
            page:widget.page,
            id:i,
            type:widget.type,
            container:widget.container,
            title:widget.title,
            data:widget.data || {}
        });
    });
    var filtered = widgets.filter(function (val) {
        return val.page == req.params.pagetype;
    });
    res.json({
        widgets:filtered
    });
};