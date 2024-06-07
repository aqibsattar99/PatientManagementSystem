
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PMSDB.Models
{
    public class PMSdbContext : DbContext
    {
        public PMSdbContext(DbContextOptions<PMSdbContext> options) : base(options)
        {

        }
        public DbSet<PatientInfo> PatientInfo { get; set; }

        //public DbSet<Equipment> Equipment { get; set; }
        //public DbSet<Issue> Issue { get; set; }
        //public DbSet<Users> Users { get; set; }
    }
}